import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Branches from "./Branches";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const SubjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const subjectName = queryParams.get("subject");

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

  const handleYoutube = (link) => {
    window.open(link, "_blank");
  };

  if (!subjectData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-black to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700 flex items-center justify-center py-12">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-red-500 dark:text-red-400">
                Subject Not Found
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
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
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-black to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700 py-8">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6 text-red-500 dark:text-red-400">
                {subjectData.subjectName}
              </h2>
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="mb-6"
              >
                Back to Subjects
              </Button>
            </div>

            {/* Notes Section */}
            {subjectData.Note && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {subjectData.Note.map((note, index) => (
                      <a
                        key={index}
                        href={note.noteLink}
                        className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
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
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => handleYoutube(subjectData.youtubeLink.link)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Watch {subjectData.youtubeLink.title}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* PYQ Section */}
            {subjectData.PYQ && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Previous Year Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={subjectData.PYQ.link}
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
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
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Syllabus</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={subjectData.syllabus.link}
                    className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
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