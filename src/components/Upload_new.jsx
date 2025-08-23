import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

const Upload = () => {
  const [data, setData] = useState({
    university: "",
    branch: "",
    year: "",
    subject: "",
    link: "",
    file: null,
  });

  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setData({ ...data, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key]) {
          formData.append(key, data[key]);
        }
      });

      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Resource uploaded successfully!");
        setData({
          university: "",
          branch: "",
          year: "",
          subject: "",
          link: "",
          file: null,
        });
      }
    } catch (err) {
      console.error("Upload failed ", err);
      alert("Upload failed ");
    }
  };

  return (
    <div data-theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-black to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-700 py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-500 dark:text-red-400">
              PUSTAK GHAR
            </h2>
            <p className="text-lg mb-4 text-white dark:text-gray-300">
              SHARE STUDY MATERIALS, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
            </p>
            <p className="text-lg mb-8 text-white dark:text-gray-300">
              Let's expand the knowledge base at - PUSTAK GHAR
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  value={data.university}
                  onChange={handleChange}
                  placeholder='University Name'
                  name="university"
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div>
                <Input
                  value={data.branch}
                  onChange={handleChange}
                  placeholder='Branch'
                  name="branch"
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div>
                <Input
                  value={data.year}
                  onChange={handleChange}
                  placeholder='Year'
                  name="year"
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div>
                <Input
                  value={data.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  name="subject"
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div>
                <Input
                  type="url"
                  value={data.link}
                  onChange={handleChange}
                  placeholder="Resource Link (YouTube/Drive/etc)"
                  name="link"
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div>
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full bg-white/90 dark:bg-zinc-800/90 border-2 border-white/50 dark:border-zinc-700"
                />
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
