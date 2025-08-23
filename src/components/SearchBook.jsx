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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-45 from-rose-400 via-black to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700 bg-[length:400%_400%] animate-gradient">
      <div className="max-w-4xl w-full px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            CRUSH THE TEST, UNLEASH SUCCESS
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 dark:text-red-400">
            PUSTAK GHAR
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white dark:text-gray-300 leading-relaxed">
            FREE STUDY MATERIAL, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-6"
          >
            <div className="w-full max-w-xs">
              <Select onValueChange={setUniversity}>
                <SelectTrigger className="w-full h-12 bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700 text-zinc-900 dark:text-white">
                  <SelectValue placeholder="Select University" />
                </SelectTrigger>
                <SelectContent>
                  {universityName && (
                    <SelectItem value={universityName}>{universityName}</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full max-w-xs">
              <Select onValueChange={setCourse} disabled={!university}>
                <SelectTrigger className="w-full h-12 bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700 text-zinc-900 dark:text-white disabled:opacity-50">
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

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!university || !course}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;