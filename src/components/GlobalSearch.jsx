import { useState, useMemo } from "react";
import "./GlobalSearch.css";

const flattenResources = (data) => {
  let resources = [];

  data.courses.forEach((course) => {
    course.branches.forEach((branch) => {
      branch.years.forEach((year) => {
        year.subjects.forEach((subject) => {
          const yearLabel = year.year;

          // Notes (array of objects)
          if (subject.Note && subject.Note.length > 0) {
            subject.Note.forEach((note) => {
              resources.push({
                title: `${subject.subjectName} - ${note.title} (${yearLabel})`,
                type: "Note",
                link: note.noteLink,
                year: yearLabel,
              });
            });
          } else if (subject.notesPage) {
            resources.push({
              title: `${subject.subjectName} (${yearLabel} year)`,
              type: "Note",
              link: subject.notesPage,
              year: yearLabel,
            });
          }

          // YouTube
          if (subject.youtubeLink) {
            if (typeof subject.youtubeLink === "object") {
              resources.push({
                title:
                  subject.youtubeLink.title ||
                  `${subject.subjectName} YouTube (${yearLabel})`,
                type: "YouTube",
                link: subject.youtubeLink.link,
                year: yearLabel,
              });
            } else {
              resources.push({
                title: `${subject.subjectName} (${yearLabel} year)`,
                type: "YouTube",
                link: subject.youtubeLink,
                year: yearLabel,
              });
            }
          }

          // PYQ
          if (subject.PYQ) {
            if (typeof subject.PYQ === "object") {
              resources.push({
                title:
                  subject.PYQ.title ||
                  `${subject.subjectName} PYQ (${yearLabel})`,
                type: "PYQ",
                link: subject.PYQ.link,
                year: yearLabel,
              });
            } else {
              resources.push({
                title: `${subject.subjectName} (${yearLabel} year)`,
                type: "PYQ",
                link: subject.PYQ,
                year: yearLabel,
              });
            }
          }

          // Syllabus
          if (subject.syllabus) {
            if (typeof subject.syllabus === "object") {
              resources.push({
                title:
                  subject.syllabus.title ||
                  `${subject.subjectName} Syllabus (${yearLabel})`,
                type: "Syllabus",
                link: subject.syllabus.link,
                year: yearLabel,
              });
            } else {
              resources.push({
                title: `${subject.subjectName} (${yearLabel} year)`,
                type: "Syllabus",
                link: subject.syllabus,
                year: yearLabel,
              });
            }
          }
        });
      });
    });
  });

  // Deduplicate by link + type + year
  const seen = new Set();
  return resources.filter((res) => {
    const key = res.link + res.type + res.year;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export default function GlobalSearch({ branches }) {
  const [query, setQuery] = useState("");
  const allResources = useMemo(() => flattenResources(branches), [branches]);
  const filtered = allResources.filter((res) => {
    const cleanTitle = res.title.replace(/\(.*?\)/g, "").trim();
    return cleanTitle.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="global-search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="🔍 Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {query && (
        <div className="search-results-dropdown">
          {filtered.length > 0 ? (
            filtered.map((res, i) => (
              <a
                key={i}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="search-result-item"
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
  );
}
