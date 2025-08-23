import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import { Button } from "./ui/button";

const SubjectsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const university = queryParams.get("university");
  const course = queryParams.get("course");
  const branch = queryParams.get("branch");
  const year = queryParams.get("year");

  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);

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
      className="min-h-screen bg-gradient-to-br from-red-500 via-black to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700 py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-red-500 dark:text-red-400">
              Subjects List
            </h2>
            {error && (
              <p className="text-red-500 dark:text-red-400 mb-4">
                {error}
              </p>
            )}
            {!error && subjects.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {subjects.map((subject, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSubjectClick(subject)}
                    className="px-6 py-3 bg-white/90 dark:bg-zinc-800/90 text-gray-900 dark:text-white border-2 border-white/50 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                    variant="outline"
                  >
                    {subject.subjectName}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-gray-300 dark:text-gray-400">
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