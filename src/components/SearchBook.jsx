import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import "./SearchBook.css";

const Search = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  // Extract university name dynamically
  const universityName = Branches?.universityName;

  // Check if courses exist and is an array before using map
  const courses = Array.isArray(Branches?.courses) 
    ? Branches.courses.map((course) => course.courseName) 
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/branch-year?university=${university}&course=${course}`);
  };

  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-3 text-white">
              CRUSH THE TEST, UNLEASH SUCCESS
            </h1>
            <h2 className="mb-4 text-danger">PUSTAK GHAR</h2>
            <p className="lead mb-4 text-white">
              FREE STUDY MATERIAL, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
            </p>
            <form
              onSubmit={handleSubmit}
              className="form-inline justify-content-center flex-column"
            >
              <div className="form-group mx-2 mb-3">
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
              <div className="form-group mx-2 mb-3">
                <select
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={!university}
                >
                  <option value="">Select Course</option>
                  {courses.length > 0 ? (
                    courses.map((courseName, index) => (
                      <option key={index} value={courseName}>{courseName}</option>
                    ))
                  ) : (
                    <option>No courses available</option>
                  )}
                </select>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-danger mx-2" disabled={!university || !course}>
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
