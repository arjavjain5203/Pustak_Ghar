import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import "./SearchBook.css";

const Search = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  // Listen to theme from <html data-theme="">
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const universityName = Branches?.universityName;
  const courses = Array.isArray(Branches?.courses)
    ? Branches.courses.map((c) => c.courseName)
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/branch-year?university=${university}&course=${course}`);
  };

  return (
    <div className={`hero ${theme}`}>
      <div className="container glass-card py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="hero-title">CRUSH THE TEST, UNLEASH SUCCESS</h1>
            <h2 className="hero-subtitle">PUSTAK GHAR</h2>
            <p className="hero-text">
              FREE STUDY MATERIAL, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
            </p>

            <form onSubmit={handleSubmit} className="search-form">
              <div className="form-group">
                <select
                  className="form-control"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  <option value="">Select University</option>
                  {universityName && (
                    <option value={universityName}>{universityName}</option>
                  )}
                </select>
              </div>

              <div className="form-group">
                <select
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={!university}
                >
                  <option value="">Select Course</option>
                  {courses.length > 0 ? (
                    courses.map((name, index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    ))
                  ) : (
                    <option>No courses available</option>
                  )}
                </select>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="search-btn"
                  disabled={!university || !course}
                >
                  Search
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;