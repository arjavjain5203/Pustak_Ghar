import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";


const Search = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const universityName = Branches?.universityName;

  const courses = Array.isArray(Branches?.courses)
    ? Branches.courses.map((course) => course.courseName)
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/branch-year?university=${university}&course=${course}`);
  };

  return (
    // Apply theme as a data attribute for CSS to use
    <div className="hero" data-theme={theme}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-3 text-white">
              CRUSH THE TEST, UNLEASH SUCCESS
            </h1>
            <h2
              className="mb-4"
              style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }}
            >
              PUSTAK GHAR
            </h2>
            <p
              className="lead mb-4"
              style={theme === "dark" ? { color: "#ccc" } : { color: "#fff" }}
            >
              FREE STUDY MATERIAL, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
            </p>

            <form
              onSubmit={handleSubmit}
              className="form-inline justify-content-center flex-column"
            >
              <div className="form-group mx-2 mb-3">
                <Select onValueChange={setUniversity}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select University" />
                  </SelectTrigger>
                  <SelectContent>
                    {universityName && (
                      <SelectItem value={universityName}>{universityName}</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group mx-2 mb-3">
                <Select onValueChange={setCourse} disabled={!university}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.length > 0 ? (
                      courses.map((courseName, index) => (
                        <SelectItem key={index} value={courseName}>
                          {courseName}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="no-courses" disabled>No courses available</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-3">
                <Button
                  type="submit"
                  className="btn btn-danger mx-2"
                  disabled={!university || !course}
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;