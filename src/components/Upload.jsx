import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

const Upload = () => {

    const [data, setData] = useState({
        university: "",
        course: "",
        branch: "",
        year: "",
        subject: "",
        link: "",
    });

    const [file, setFile] = useState(null);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("university", data.university);
      formData.append("course", data.course);
      formData.append("branch", data.branch);
      formData.append("year", data.year);
      formData.append("subject", data.subject);
      if (data.link) {
        formData.append("link", data.link);
      }
      if (file) {
        formData.append("pdf", file); // "pdf" should match backend field name
      }

      await axios.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload successful ");
      navigate("/");
    } catch (err) {
      console.error("Upload failed ", err);
      alert("Upload failed ");
    }
  };

  return (
    <div data-theme={theme} >
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
          style={theme === "dark" ? { color: "#ff6f61" } : { color: "#dc3545" }} // dark mode softer red
        >
          PUSTAK GHAR
        </h2>
        <p
          className="lead mb-4"
          style={theme === "dark" ? { color: "#ccc" } : { color: "#fff" }}
        >
          SHARE STUDY MATERIALS, NOTES, PYQS, VIDEO PLAYLISTS AND MORE...
        </p>
        <p
          className="lead mb-4"
          style={theme === "dark" ? { color: "#ccc" } : { color: "#fff" }}
        >
          Let's expand the knowledge base at - PUSTAK GHAR
        </p>

        <form
          onSubmit={handleSubmit}
          className="form-inline justify-content-center flex-column"
        >
          <div className="form-group mx-2 mb-3">
            <Input
              value={data.university}
              onChange={handleChange}
              placeholder='University Name'
              name="university"
            />
          </div>

          <div className="form-group mx-2 mb-3">
            <Input
              value={data.course}
              onChange={handleChange}
               placeholder='Course'
               name="course"
            />
          </div>

          <div className="form-group mx-2 mb-3">
            <Input
              value={data.branch}
              onChange={handleChange}
               placeholder='Branch'
               name="branch"
            />
          </div>

          <div className="form-group mx-2 mb-3">
            <Input
              value={data.year}
              onChange={handleChange}
               placeholder='Year'
               name="year"
            />
          </div>

          <div className="form-group mx-2 mb-3">
            <Input
              value={data.subject}
              onChange={handleChange}
               placeholder='Subject'
               name="subject"
            />
          </div>

          {/* Link Input */}
              <div className="form-group mx-2 mb-3">
                <Input
                  type="url"
                  value={data.link}
                  onChange={handleChange}
                  placeholder="Resource Link (YouTube/Drive/etc)"
                  name="link"
                />
              </div>

              {/* File Input */}
              <div className="form-group mx-2 mb-3">
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </div>

          <div className="mt-3">
            <Button
              type="submit"
              className="btn btn-danger mx-2"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Upload;