import React, { useState, useEffect, useRef } from "react";
import "./GlobalSearch.css";

const GlobalSearch = ({ branches }) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Flatten the nested branches data into a single array of resources
  const flattenResources = (data) => {
    if (!data) return [];
    const courses = Array.isArray(data.courses) ? data.courses : [];
    const resources = [];

    courses.forEach((course) => {
      if (!course.branches) return;

      course.branches.forEach((subBranch) => {
        if (!subBranch.years) return;

        subBranch.years.forEach((year) => {
          if (!year.subjects) return;
          year.subjects.forEach((subject) => {
            const yearLabel = year.year || "N/A";

            const pushResource = (title, type, link) => {
              if (!link) return;
              const cleanTitle = title
                .replace(/\(.*?\)/g, "")
                .trim()
                .toLowerCase();
              resources.push({
                title,
                type,
                link,
                year: yearLabel,
                cleanTitle,
              });
            };

            // Notes
            if (subject.Note && Array.isArray(subject.Note)) {
              subject.Note.forEach((note) =>
                pushResource(
                  `${subject.subjectName} - ${note.title} (${yearLabel})`,
                  "Note",
                  note.noteLink
                )
              );
            } else if (subject.notesPage) {
              pushResource(
                `${subject.subjectName} (${yearLabel} year)`,
                "Note",
                subject.notesPage
              );
            }

            // YouTube
            if (subject.youtubeLink) {
              if (typeof subject.youtubeLink === "object") {
                pushResource(
                  subject.youtubeLink.title ||
                    `${subject.subjectName} YouTube (${yearLabel})`,
                  "YouTube",
                  subject.youtubeLink.link
                );
              } else {
                pushResource(
                  `${subject.subjectName} (${yearLabel} year)`,
                  "YouTube",
                  subject.youtubeLink
                );
              }
            }

            // PYQ
            if (subject.PYQ) {
              if (typeof subject.PYQ === "object") {
                pushResource(
                  subject.PYQ.title ||
                    `${subject.subjectName} PYQ (${yearLabel})`,
                  "PYQ",
                  subject.PYQ.link
                );
              } else {
                pushResource(
                  `${subject.subjectName} (${yearLabel} year)`,
                  "PYQ",
                  subject.PYQ
                );
              }
            }

            // Syllabus
            if (subject.syllabus) {
              if (typeof subject.syllabus === "object") {
                pushResource(
                  subject.syllabus.title ||
                    `${subject.subjectName} Syllabus (${yearLabel})`,
                  "Syllabus",
                  subject.syllabus.link
                );
              } else {
                pushResource(
                  `${subject.subjectName} (${yearLabel} year)`,
                  "Syllabus",
                  subject.syllabus
                );
              }
            }
          });
        });
      });
    });

    // Deduplicate
    const seen = new Set();
    return resources.filter((res) => {
      const key = res.link + res.type + res.year;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const allResources = flattenResources(branches);

  useEffect(() => {
    if (!query) {
      setFiltered([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const results = allResources.filter((res) =>
      res.cleanTitle.includes(lowerQuery)
    );
    setFiltered(results);
  }, [query, allResources]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  return (
    <div ref={wrapperRef} className="global-search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="🔍 Search"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          className="search-input"
        />
        {showDropdown && (
          <div className="search-results-dropdown">
            {filtered.length ? (
              filtered.map((res, idx) => (
                <a
                  key={idx}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="search-result-item"
                  onClick={() => setShowDropdown(false)}
                >
                  <span className="result-title">{res.title}</span>
                  <span className={`result-type ${res.type.toLowerCase()}`}>
                    {res.type}
                  </span>
                </a>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;
