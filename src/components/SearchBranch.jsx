import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import "./SearchBook.css";

const Branch = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light"); 
  const queryParams = new URLSearchParams(location.search);
  const university = queryParams.get("university");
  const course = queryParams.get("course");
  const navigate = useNavigate();

  const [branch, setBranch] = useState("");
  const [year, setYear] = useState(""); // Changed to 'year'
  const [availableBranches, setAvailableBranches] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (university && course) {
      // Find course data
      const courseData = Branches.courses.find((c) => c.courseName === course);

      if (courseData) {
        // Set branches and years based on the selected course
        setAvailableBranches(courseData.branches.map(branch => branch.branchName));
      } else {
        setError("This course is not available.");
      }
    } else {
      setError("University or course is missing.");
    }
  }, [university, course]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (branch && year) {
      navigate(
        `/subjects?university=${university}&course=${course}&branch=${branch}&year=${year}`
      );
    } else {
      setError("Please select both branch and year.");
    }
  };

  const handleBranchChange = (e) => {
    const selectedBranch = e.target.value;
    setBranch(selectedBranch);

    const courseData = Branches.courses.find(c => c.courseName === course);
    if (courseData) {
      const branchData = courseData.branches.find(b => b.branchName === selectedBranch);
      if (branchData) {
        setAvailableYears(branchData.years.map(year => year.year));
      }
    }
  };

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
      : undefined
  }
>
  <div className="container py-5" style={theme === "dark" ? { maxWidth: "90%", width: "90%" } : undefined}>
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2
          className="mb-4"
          style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }}
        >
          PUSTAK GHAR
        </h2>
        {error && (
          <p className="text-danger" style={theme === "dark" ? { color: "#ff6f61" } : undefined}>
            {error}
          </p>
        )}
        {!error && (
          <form
            onSubmit={handleSubmit}
            className="form-inline justify-content-center flex-column"
          >
            <div className="form-group mx-2 mb-3">
              <select
                className="form-control"
                value={branch}
                onChange={handleBranchChange}
                style={
                  theme === "dark"
                    ? {
                        backgroundColor: "rgba(30, 30, 30, 0.85)",
                        color: "#eee",
                        border: "1px solid #ff6f61",
                        padding: "12px",
                        width: "100%",
                      }
                    : undefined
                }
              >
                <option value="">Select Branch</option>
                {availableBranches.length > 0 ? (
                  availableBranches.map((branchOption, index) => (
                    <option key={index} value={branchOption}>
                      {branchOption}
                    </option>
                  ))
                ) : (
                  <option value="">No branches available</option>
                )}
              </select>
            </div>
            <div className="form-group mx-2 mb-3">
              <select
                className="form-control"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={
                  theme === "dark"
                    ? {
                        backgroundColor: "rgba(30, 30, 30, 0.85)",
                        color: "#eee",
                        border: "1px solid #ff6f61",
                        padding: "12px",
                        width: "100%",
                      }
                    : undefined
                }
              >
                <option value="">Select Year</option>
                {availableYears.length > 0 ? (
                  availableYears.map((yearOption, index) => (
                    <option key={index} value={yearOption}>
                      {yearOption}
                    </option>
                  ))
                ) : (
                  <option value="">No years available</option>
                )}
              </select>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-danger mx-2"
                style={
                  theme === "dark"
                    ? {
                        backgroundColor: "#ff6f61",
                        color: "#121212",
                        border: "none",
                        padding: "12px 25px",
                        width: "100%",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                      }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (theme === "dark") {
                    e.currentTarget.style.backgroundColor = "#ff3b30";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "scale(1.1)";
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
                Search
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Branch;
