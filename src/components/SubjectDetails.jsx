import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches";
import "./SearchBook.css";

const SubjectDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subjectName = queryParams.get("subject");
  const navigate = useNavigate();

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
      <div className="hero">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4 text-danger">Subject Not Found</h2>
              <p>The requested subject could not be found.</p>
              <button
                className="btn btn-danger"
                onClick={() => navigate(-1)}
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
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center mb-4">
              <h2 className="text-danger">{subjectData.subjectName}</h2>
              <button
                className="btn btn-outline-light mb-3"
                onClick={() => navigate(-1)}
              >
                Back to Subjects
              </button>
            </div>

            {/* Notes Section */}
            {subjectData.Note && (
              <div className="card mb-4 bg-dark text-white">
                <div className="card-header bg-danger">
                  <h4>Notes</h4>
                </div>
                <div className="card-body">
                  <div className="list-group">
                    {subjectData.Note.map((note, index) => (
                      <a
                        key={index}
                        href={note.noteLink}
                        className="list-group-item list-group-item-action bg-secondary text-white"
                        target="_blank"
                        rel="noopener noreferrer"
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
              <div className="card mb-4 bg-dark text-white">
                <div className="card-header bg-danger">
                  <h4>Video Tutorials</h4>
                </div>
                <div className="card-body text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleYoutube(subjectData.youtubeLink.link)}
                  >
                    Watch {subjectData.youtubeLink.title}
                  </button>
                </div>
              </div>
            )}

            {/* PYQ Section */}
            {subjectData.PYQ && (
              <div className="card mb-4 bg-dark text-white">
                <div className="card-header bg-danger">
                  <h4>Previous Year Questions</h4>
                </div>
                <div className="card-body">
                  <a
                    href={subjectData.PYQ.link}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subjectData.PYQ.title}
                  </a>
                </div>
              </div>
            )}

            {/* Syllabus Section */}
            {subjectData.syllabus && (
              <div className="card mb-4 bg-dark text-white">
                <div className="card-header bg-danger">
                  <h4>Syllabus</h4>
                </div>
                <div className="card-body">
                  <a
                    href={subjectData.syllabus.link}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
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