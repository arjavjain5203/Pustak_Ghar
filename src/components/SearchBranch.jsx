import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import "./SearchBook.css";

const Branch = () => {
  const location = useLocation();
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
    <div className="hero">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 text-danger">PUSTAK GHAR</h2>
            {error && <p className="text-danger">{error}</p>}
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
                  <button type="submit" className="btn btn-danger mx-2">
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
