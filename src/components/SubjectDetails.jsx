import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const SubjectDetails = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const queryParams = new URLSearchParams(location.search);
  const subjectName = queryParams.get("subject");
  const navigate = useNavigate();
  const isDark = theme === "dark";

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
            : {
                background:
                  "linear-gradient(45deg, #ff0000, #000000, #ffffff)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                padding: "3rem 0",
              }
        }
      >
        <div
          className="container py-5"
          style={theme === "dark" ? { maxWidth: "90%", width: "90%" } : undefined}
        >
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2
                className="mb-4"
                style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }}
              >
                Subject Not Found
              </h2>
              <p style={theme === "dark" ? { color: "#ccc" } : { color: "#333" }}>
                The requested subject could not be found.
              </p>
              <Button
                variant="destructive"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hero"
      style={{
        background: isDark
          ? "linear-gradient(45deg, #0d0d0d, #1a1a1a, #333333)"
          : "linear-gradient(45deg, #ff0000, #000000, #ffffff)",
        minHeight: "100vh",
        padding: "2rem 0",
        color: isDark ? "#eee" : "#000",
      }}
    >
      <div className="container py-5" style={{ maxWidth: "90%", width: "90%" }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center mb-4">
              <h2
                className="mb-4"
                style={{ color: isDark ? "#ff6f61" : "#dc3545" }}
              >
                {subjectData.subjectName}
              </h2>
              <Button
                onClick={() => navigate(-1)}
              >
                Back to Subjects
              </Button>
            </div>

            {/* Notes Section */}
            {subjectData.Note && (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="list-group">
                    {subjectData.Note.map((note, index) => (
                      <a
                        key={index}
                        href={note.noteLink}
                        className="list-group-item list-group-item-action"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {note.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* YouTube Link Section */}
            {subjectData.youtubeLink && (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => handleYoutube(subjectData.youtubeLink.link)}
                  >
                    Watch {subjectData.youtubeLink.title}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* PYQ Section */}
            {subjectData.PYQ && (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Previous Year Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={subjectData.PYQ.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subjectData.PYQ.title}
                  </a>
                </CardContent>
              </Card>
            )}

            {/* Syllabus Section */}
            {subjectData.syllabus && (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Syllabus</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={subjectData.syllabus.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subjectData.syllabus.title}
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;