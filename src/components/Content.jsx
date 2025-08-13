import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import "./SearchBook.css";

const SubjectsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const university = queryParams.get("university");
  const course = queryParams.get("course");
  const branch = queryParams.get("branch");
  const year = queryParams.get("year");
  const [theme, setTheme] = useState("light"); // or dark


  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (university && course && branch && year) {
      const universityData = Branches.universityName === university ? Branches : null;
      
      if (universityData) {
        const courseData = universityData.courses.find((c) => c.courseName === course);
        
        if (courseData) {
          const branchData = courseData.branches.find((b) => b.branchName === branch);
          
          if (branchData) {
            const yearData = branchData.years.find((y) => y.year === year);
            
            if (yearData) {
              setSubjects(yearData.subjects || []);
            } else {
              setError("Invalid year selection.");
            }
          } else {
            setError("This branch is not available in the selected course.");
          }
        } else {
          setError("This course is not available in the selected university.");
        }
      } else {
        setError("This university is not available.");
      }
    } else {
      setError("Missing parameters for university, course, branch, or year.");
    }
  }, [university, course, branch, year]);

  const handleSubjectClick = (subject) => {
    console.log("Selected Subject:", subject);
    navigate(`/subject-details?subject=${subject.subjectName}`);
  };

  const handleDownload = (link) => {
    window.open(link, "_blank");
  };

  const handleYoutube = (link) => {
    window.open(link, "_blank");
  };

  return (
<div className={`hero ${theme === "dark" ? "hero-dark" : ""}`}>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2 className={`mb-4 ${theme === "dark" ? "text-danger-dark" : "text-danger"}`}>
          Subjects List
        </h2>
        {error && <p className={`text-danger ${theme === "dark" ? "text-danger-dark" : ""}`}>{error}</p>}
        {!error && subjects.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center">
            {subjects.map((subject, index) => (
              <div key={index} className={`subject-card m-2 p-3 border ${theme === "dark" ? "subject-card-dark border-dark" : ""}`}>
                <h4 className="subject-title">{subject.subjectName}</h4>
                <button
                  className={`btn m-2 rounded ${theme === "dark" ? "btn-dark-mode" : "btn-light text-danger"}`}
                  onClick={() => handleSubjectClick(subject)}
                >
                  View Details
                </button>
                    {/* Render Notes */}
                   <div className={`notes ${theme === "dark" ? "notes-dark" : ""}`}>
  <h5 className={theme === "dark" ? "text-light" : ""}>Notes:</h5>
  {subject.Note.map((note, index) => (
    <a
      key={index}
      href={note.noteLink}
      className={`d-block ${theme === "dark" ? "text-info-dark" : "text-info"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {note.title}
    </a>
  ))}
</div>


                    {/* Render YouTube Link */}
                    {subject.youtubeLink && (
  <div
    className="youtube-link"
    style={theme === "dark" ? {
      backgroundColor: "#1e1e1e",
      padding: "1rem",
      borderRadius: "6px",
      color: "#f0f0f0",
    } : undefined}
  >
    <h5 style={theme === "dark" ? { color: "#f0f0f0" } : undefined}>
      {subject.youtubeLink.title}
    </h5>

    <button
      className="btn btn-danger"
      onClick={() => handleYoutube(subject.youtubeLink.link)}
      style={theme === "dark" ? {
        backgroundColor: "#c53030",
        borderColor: "#9b2c2c",
        color: "white",
        transition: "background-color 0.3s ease",
      } : undefined}
      onMouseEnter={e => {
        if (theme === "dark") {
          e.currentTarget.style.backgroundColor = "#9b2c2c";
          e.currentTarget.style.borderColor = "#742a2a";
          e.currentTarget.style.color = "white";
        }
      }}
      onMouseLeave={e => {
        if (theme === "dark") {
          e.currentTarget.style.backgroundColor = "#c53030";
          e.currentTarget.style.borderColor = "#9b2c2c";
          e.currentTarget.style.color = "white";
        }
      }}
    >
      Watch Tutorial
    </button>

    {subject.youtubeLink.documents &&
      subject.youtubeLink.documents.map((doc, index) => (
        <button
          key={index}
          className="btn btn-outline-info m-2"
          onClick={() => handleDownload(doc.docLink)}
          style={theme === "dark" ? {
            color: "#63b3ed",
            borderColor: "#63b3ed",
            backgroundColor: "transparent",
            transition: "background-color 0.3s ease, color 0.3s ease",
          } : undefined}
          onMouseEnter={e => {
            if (theme === "dark") {
              e.currentTarget.style.backgroundColor = "#63b3ed";
              e.currentTarget.style.color = "#1e1e1e";
            }
          }}
          onMouseLeave={e => {
            if (theme === "dark") {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#63b3ed";
            }
          }}
        >
          {doc.title} (Download PDF)
        </button>
      ))}
  </div>
)}


                    <div
  className="pyq"
  style={theme === "dark" ? { backgroundColor: "#1e1e1e", padding: "1rem", borderRadius: "6px", color: "#e0e0e0" } : undefined}
>
  <h5 style={theme === "dark" ? { color: "#f0f0f0" } : undefined}>Previous Year Questions:</h5>
  {subject.PYQ.map((pyq, index) => (
    <a
      key={index}
      href={pyq.link}
      className="d-block"
      target="_blank"
      rel="noopener noreferrer"
      style={theme === "dark" ? { color: "#63b3ed" } : { color: "#17a2b8" }} // text-info blue or custom dark blue
      onMouseEnter={e => {
        if (theme === "dark") e.currentTarget.style.color = "#4299e1";
      }}
      onMouseLeave={e => {
        if (theme === "dark") e.currentTarget.style.color = "#63b3ed";
      }}
    >
      {pyq.title}
    </a>
  ))}
</div>

{/* Render Syllabus */}
<div
  className="syllabus"
  style={theme === "dark" ? { backgroundColor: "#1e1e1e", padding: "1rem", borderRadius: "6px", color: "#e0e0e0", marginTop: "1rem" } : undefined}
>
  <h5 style={theme === "dark" ? { color: "#f0f0f0" } : undefined}>Syllabus:</h5>
  {subject.syllabus.map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="d-block"
      target="_blank"
      rel="noopener noreferrer"
      style={theme === "dark" ? { color: "#63b3ed" } : { color: "#17a2b8" }}
      onMouseEnter={e => {
        if (theme === "dark") e.currentTarget.style.color = "#4299e1";
      }}
      onMouseLeave={e => {
        if (theme === "dark") e.currentTarget.style.color = "#63b3ed";
      }}
    >
      {item.title}
    </a>
  ))}
</div>

                  </div>
                ))}
              </div>
            ) : (
              <p>No subjects available for the selected options.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
