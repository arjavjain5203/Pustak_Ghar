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
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 text-danger">Subjects List</h2>
            {error && <p className="text-danger">{error}</p>}
            {!error && subjects.length > 0 ? (
              <div className="d-flex flex-wrap justify-content-center">
                {subjects.map((subject, index) => (
                  <div key={index} className="subject-card m-2 p-3 border">
                    <h4 className="subject-title">{subject.subjectName}</h4>
                    <button
                      className="text-danger btn btn-light m-2 rounded"
                      onClick={() => handleSubjectClick(subject)}
                    >
                      View Details
                    </button>
                    {/* Render Notes */}
                    <div className="notes">
                      <h5>Notes:</h5>
                      {subject.Note.map((note, index) => (
                        <a key={index} href={note.noteLink} className="d-block text-info" target="_blank" rel="noopener noreferrer">
                          {note.title}
                        </a>
                      ))}
                    </div>

                    {/* Render YouTube Link */}
                    {subject.youtubeLink && (
                      <div className="youtube-link">
                        <h5>{subject.youtubeLink.title}</h5>
                        <button className="btn btn-danger" onClick={() => handleYoutube(subject.youtubeLink.link)}>
                          Watch Tutorial
                        </button>
                        {subject.youtubeLink.documents &&
                          subject.youtubeLink.documents.map((doc, index) => (
                            <button
                              key={index}
                              className="btn btn-outline-info m-2"
                              onClick={() => handleDownload(doc.docLink)}
                            >
                              {doc.title} (Download PDF)
                            </button>
                          ))}
                      </div>
                    )}

                    {/* Render PYQ */}
                    <div className="pyq">
                      <h5>Previous Year Questions:</h5>
                      {subject.PYQ.map((pyq, index) => (
                        <a key={index} href={pyq.link} className="d-block text-info" target="_blank" rel="noopener noreferrer">
                          {pyq.title}
                        </a>
                      ))}
                    </div>

                    {/* Render Syllabus */}
                    <div className="syllabus">
                      <h5>Syllabus:</h5>
                      {subject.syllabus.map((item, index) => (
                        <a key={index} href={item.link} className="d-block text-info" target="_blank" rel="noopener noreferrer">
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
