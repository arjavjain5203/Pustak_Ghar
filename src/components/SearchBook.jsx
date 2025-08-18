import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import Contact from "./Contact";
import "./SearchBook.css";

const Search = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

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
    <>
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
              <h1
                className="display-4 mb-3"
                style={theme === "dark" ? { color: "#fff" } : { color: "#fff" }}
              >
                CRUSH THE TEST, UNLEASH SUCCESS
              </h1>
              <h2
                className="mb-4"
                style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }} // dark mode softer red
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
                  <select
                    className="form-control"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    style={
                      theme === "dark"
                        ? {
                          backgroundColor: "rgba(30,30,30,0.85)",
                          color: "#eee",
                          border: "1px solid #ff6f61",
                          padding: "12px",
                          width: "100%",
                        }
                        : undefined
                    }
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
                    style={
                      theme === "dark"
                        ? {
                          backgroundColor: "rgba(30,30,30,0.85)",
                          color: "#eee",
                          border: "1px solid #ff6f61",
                          padding: "12px",
                          width: "100%",
                        }
                        : undefined
                    }
                  >
                    <option value="">Select Course</option>
                    {courses.length > 0 ? (
                      courses.map((courseName, index) => (
                        <option key={index} value={courseName}>
                          {courseName}
                        </option>
                      ))
                    ) : (
                      <option>No courses available</option>
                    )}
                  </select>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-danger mx-2"
                    disabled={!university || !course}
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
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>

  );
};

export default Search;
