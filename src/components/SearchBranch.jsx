import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches"; // Import your data here
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

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

  const handleBranchChange = (selectedBranch) => {
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
              <Select onValueChange={handleBranchChange}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  {availableBranches.length > 0 ? (
                    availableBranches.map((branchOption, index) => (
                      <SelectItem key={index} value={branchOption}>
                        {branchOption}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="no-branches" disabled>No branches available</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="form-group mx-2 mb-3">
              <Select onValueChange={setYear} disabled={!branch}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {availableYears.length > 0 ? (
                    availableYears.map((yearOption, index) => (
                      <SelectItem key={index} value={yearOption}>
                        {yearOption}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="no-years" disabled>No years available</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-3">
              <Button
                type="submit"
                className="btn btn-danger mx-2"
                disabled={!branch || !year}
              >
                Search
              </Button>
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