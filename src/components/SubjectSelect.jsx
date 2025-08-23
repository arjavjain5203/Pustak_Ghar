import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import { Button } from "./ui/button";

const SubjectsPage = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
    const isDark = theme === "dark";
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
    navigate(`/content?subject=${subject.subjectName}`);
  };

  return (
   <div
      className="hero"
      style={{
        background: isDark
          ? "linear-gradient(45deg, #0d0d0d, #1a1a1a, #333333)"
          : "linear-gradient(45deg, #ff0000, #000000, #ffffff)",
        minHeight: "100vh",
        padding: "3rem 0",
        color: isDark ? "#e0e0e0" : "#000",
      }}
    >
      <div className="container py-5" style={{ maxWidth: "90%", width: "90%" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2
              className="mb-4"
              style={{ color: isDark ? "#ff6f61" : "#dc3545" }}
            >
              Subjects List
            </h2>
            {error && (
              <p className="text-danger" style={{ color: isDark ? "#ff6f61" : undefined }}>
                {error}
              </p>
            )}
            {!error && subjects.length > 0 ? (
              <div className="d-flex flex-wrap justify-content-center">
                {subjects.map((subject, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSubjectClick(subject)}
                    className="m-2 rounded"
                    variant="outline"
                  >
                    {subject.subjectName}
                  </Button>
                ))}
              </div>
            ) : (
              <p style={{ color: isDark ? "#ccc" : undefined }}>
                No subjects available for the selected options.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;