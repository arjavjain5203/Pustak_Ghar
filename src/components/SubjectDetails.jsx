import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches";
import { useState } from "react";
import "./SearchBook.css";

const SubjectDetails = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const queryParams = new URLSearchParams(location.search);
  const subjectName = queryParams.get("subject");
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const cardStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#eee" : "#000",
  };

  const cardHeaderStyle = {
    backgroundColor: isDark ? "#b22222" : "#dc3545", // dark red vs bootstrap danger
    color: "#fff",
  };

  const linkBtnStyle = {
    color: isDark ? "#fff" : "#dc3545",
    borderColor: isDark ? "#fff" : "#dc3545",
  };

  const btnStyle = {
    backgroundColor: isDark ? "#b22222" : "#dc3545",
    color: "#fff",
    border: "none",
  };

  // Find the subject data from Branches
  let subjectData = null;

  for (const course of Branches.courses) {
    for (const branch of course.branches) {
      for (const year of branch.years) {
        const foundSubject = year.subjects.find(
          (subj) => subj.subjectName === subjectName
        );
        if (foundSubject) {
          subjectData = foundSubject;
          break;
        }
      }
      if (subjectData) break;
    }
    if (subjectData) break;
  }

  const handleDownload = (link) => {
    window.open(link, "_blank");
  };

  const handleYoutube = (link) => {
    window.open(link, "_blank");
  };

  if (!subjectData) {
    return (
   <div
        className="hero"
        style={
          theme === "dark"
            ? {
                background:
                  "linear-gradient(45deg, #0d0d0d, #1a1a1a, #333333)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e0e0e0",
                padding: "3rem 0",
              }
            : {
                background:
                  "linear-gradient(45deg, #ff0000, #000000, #ffffff)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                padding: "3rem 0",
              }
        }
      >
        <div
          className="container py-5"
          style={theme === "dark" ? { maxWidth: "90%", width: "90%" } : undefined}
        >
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2
                className="mb-4"
                style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }}
              >
                Subject Not Found
              </h2>
              <p style={theme === "dark" ? { color: "#ccc" } : { color: "#333" }}>
                The requested subject could not be found.
              </p>
              <button
                className="btn btn-danger"
                onClick={() => navigate(-1)}
                style={
                  theme === "dark"
                    ? {
                        backgroundColor: "#ff6f61",
                        color: "#121212",
                        border: "none",
                        padding: "12px 25px",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                      }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (theme === "dark") {
                    e.currentTarget.style.backgroundColor = "#ff3b30";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme === "dark") {
                    e.currentTarget.style.backgroundColor = "#ff6f61";
                    e.currentTarget.style.color = "#121212";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hero"
      style={{
        background: isDark
          ? "linear-gradient(45deg, #0d0d0d, #1a1a1a, #333333)"
          : "linear-gradient(45deg, #ff0000, #000000, #ffffff)",
        minHeight: "100vh",
        padding: "2rem 0",
        color: isDark ? "#eee" : "#000",
      }}
    >
      <div className="container py-5" style={{ maxWidth: "90%", width: "90%" }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center mb-4">
              <h2
                className="mb-4"
                style={{ color: isDark ? "#ff6f61" : "#dc3545" }}
              >
                {subjectData.subjectName}
              </h2>
              <button
                className="btn"
                onClick={() => navigate(-1)}
                style={{
                  ...btnStyle,
                  marginBottom: "1rem",
                  padding: "0.5rem 1rem",
                }}
                onMouseEnter={(e) => {
                  if (isDark) {
                    e.currentTarget.style.backgroundColor = "#ff3b30";
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDark) {
                    e.currentTarget.style.backgroundColor = "#b22222";
                  }
                }}
              >
                Back to Subjects
              </button>
            </div>

            {/* Notes Section */}
            {subjectData.Note && (
              <div
                className="card mb-4"
                style={{
                  ...cardStyle,
                }}
              >
                <div className="card-header" style={cardHeaderStyle}>
                  <h4>Notes</h4>
                </div>
                <div className="card-body">
                  <div className="list-group">
                    {subjectData.Note.map((note, index) => (
                      <a
                        key={index}
                        href={note.noteLink}
                        className="list-group-item list-group-item-action"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: isDark ? "#444" : "#f8f9fa",
                          color: isDark ? "#eee" : "#000",
                          borderColor: isDark ? "#555" : "#ddd",
                        }}
                      >
                        {note.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* YouTube Link Section */}
            {subjectData.youtubeLink && (
              <div
                className="card mb-4"
                style={{
                  ...cardStyle,
                }}
              >
                <div className="card-header" style={cardHeaderStyle}>
                  <h4>Video Tutorials</h4>
                </div>
                <div className="card-body text-center">
                  <button
                    className="btn"
                    onClick={() => handleYoutube(subjectData.youtubeLink.link)}
                    style={btnStyle}
                    onMouseEnter={(e) => {
                      if (isDark) e.currentTarget.style.backgroundColor = "#ff3b30";
                    }}
                    onMouseLeave={(e) => {
                      if (isDark) e.currentTarget.style.backgroundColor = "#b22222";
                    }}
                  >
                    Watch {subjectData.youtubeLink.title}
                  </button>
                </div>
              </div>
            )}

            {/* PYQ Section */}
            {subjectData.PYQ && (
              <div className="card mb-4" style={{ ...cardStyle }}>
                <div className="card-header" style={cardHeaderStyle}>
                  <h4>Previous Year Questions</h4>
                </div>
                <div className="card-body">
                  <a
                    href={subjectData.PYQ.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkBtnStyle}
                  >
                    {subjectData.PYQ.title}
                  </a>
                </div>
              </div>
            )}

            {/* Syllabus Section */}
            {subjectData.syllabus && (
              <div className="card mb-4" style={{ ...cardStyle }}>
                <div className="card-header" style={cardHeaderStyle}>
                  <h4>Syllabus</h4>
                </div>
                <div className="card-body">
                  <a
                    href={subjectData.syllabus.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkBtnStyle}
                  >
                    {subjectData.syllabus.title}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;