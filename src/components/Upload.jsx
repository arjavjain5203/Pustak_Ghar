import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Branches from "./Branches";
import "./SearchBook.css";
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
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
        ...prev,
        [name]: value,
    }));
    
    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validation functions
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'university':
        if (!value.trim()) {
          error = 'University is required';
        } else if (value.trim().length < 2) {
          error = 'University name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'University name should contain only letters and spaces';
        }
        break;
        
      case 'course':
        if (!value.trim()) {
          error = 'Course is required';
        } else if (value.trim().length < 2) {
          error = 'Course name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'Course name should contain only letters and spaces';
        }
        break;
        
      case 'branch':
        if (!value.trim()) {
          error = 'Branch is required';
        } else if (value.trim().length < 2) {
          error = 'Branch name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'Branch name should contain only letters and spaces';
        }
        break;
        
      case 'year':
        if (!value.trim()) {
          error = 'Year is required';
        } else if (!/^[1-4](st|nd|rd|th)?$/.test(value.trim())) {
          error = 'Please enter a valid year (1st, 2nd, 3rd, or 4th)';
        }
        break;
        
      case 'subject':
        if (!value.trim()) {
          error = 'Subject is required';
        } else if (value.trim().length < 2) {
          error = 'Subject name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'Subject name should contain only letters and spaces';
        }
        break;
        
      case 'link':
        if (value.trim()) {
          const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
          if (!urlPattern.test(value.trim())) {
            error = 'Please enter a valid URL (e.g., https://example.com)';
          }
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Validate file
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setErrors(prev => ({
          ...prev,
          file: 'Please select a PDF file only'
        }));
      } else if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setErrors(prev => ({
          ...prev,
          file: 'File size must be less than 10MB'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          file: ''
        }));
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields
    const newErrors = {};
    newErrors.university = validateField('university', data.university);
    newErrors.course = validateField('course', data.course);
    newErrors.branch = validateField('branch', data.branch);
    newErrors.year = validateField('year', data.year);
    newErrors.subject = validateField('subject', data.subject);
    newErrors.link = validateField('link', data.link);
    
    // Check if either link or file is provided
    if (!data.link.trim() && !file) {
      newErrors.resource = 'Please provide either a resource link or upload a PDF file';
    }
    
    // File validation
    if (file) {
      if (file.type !== 'application/pdf') {
        newErrors.file = 'Please select a PDF file only';
      } else if (file.size > 10 * 1024 * 1024) {
        newErrors.file = 'File size must be less than 10MB';
      }
    }
    
    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      setPopup({ show: true, type: 'error', message: 'Please fix the errors before submitting the form.' });
      return;
    }

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

      setPopup({ show: true, type: 'success', message: 'Upload successful! Your contribution has been submitted.' });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Upload failed ", err);
      setPopup({ show: true, type: 'error', message: 'Upload failed! Please try again later.' });
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
            <input
              className={`form-control ${errors.university ? 'is-invalid' : ''}`}
              value={data.university}
              onChange={handleChange}
              placeholder='University Name *'
              name="university"
            />
            {errors.university && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.university}
              </div>
            )}
          </div>

          <div className="form-group mx-2 mb-3">
            <input
               className={`form-control ${errors.course ? 'is-invalid' : ''}`}
              value={data.course}
              onChange={handleChange}
               placeholder='Course Name *'
               name="course"
            />
            {errors.course && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.course}
              </div>
            )}
          </div>

          <div className="form-group mx-2 mb-3">
            <input
               className={`form-control ${errors.branch ? 'is-invalid' : ''}`}
              value={data.branch}
              onChange={handleChange}
               placeholder='Branch Name *'
               name="branch"
            />
            {errors.branch && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.branch}
              </div>
            )}
          </div>

          <div className="form-group mx-2 mb-3">
            <input
               className={`form-control ${errors.year ? 'is-invalid' : ''}`}
              value={data.year}
              onChange={handleChange}
               placeholder='Year (1st, 2nd, 3rd, or 4th) *'
               name="year"
            />
            {errors.year && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.year}
              </div>
            )}
          </div>

          <div className="form-group mx-2 mb-3">
            <input
               className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              value={data.subject}
              onChange={handleChange}
               placeholder='Subject *'
               name="subject"
            />
            {errors.subject && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.subject}
              </div>
            )}
          </div>

          {/* Link Input */}
              <div className="form-group mx-2 mb-3">
                <input
                  type="url"
                  className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                  value={data.link}
                  onChange={handleChange}
                  placeholder="Resource Link (YouTube/Drive/etc) - Optional"
                  name="link"
                />
                {errors.link && (
                  <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                    {errors.link}
                  </div>
                )}
              </div>

              {/* File Input */}
              <div className="form-group mx-2 mb-3">
                <input
                  type="file"
                  accept="application/pdf"
                  className={`form-control ${errors.file ? 'is-invalid' : ''}`}
                  onChange={handleFileChange}
                />
                {errors.file && (
                  <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                    {errors.file}
                  </div>
                )}
              </div>

              {/* Resource requirement message */}
              {errors.resource && (
                <div style={{ color: '#dc3545', fontSize: '14px', marginBottom: '15px', textAlign: 'center' }}>
                  {errors.resource}
                </div>
              )}

          <div className="mt-3">
            <button
              type="submit"
              className="btn btn-danger mx-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      {/* Custom Popup */}
      {popup.show && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            minWidth: '300px',
            maxWidth: '400px',
            border: popup.type === 'success' ? '2px solid #28a745' : '2px solid #dc3545',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '15px',
            }}>
              {popup.type === 'success' ? '✅' : '❌'}
            </div>
            <h3 style={{
              color: popup.type === 'success' ? '#28a745' : '#dc3545',
              marginBottom: '15px',
              fontSize: '20px',
            }}>
              {popup.type === 'success' ? 'Success!' : 'Error!'}
            </h3>
            <p style={{
              color: theme === 'dark' ? '#ccc' : '#333',
              marginBottom: '20px',
              fontSize: '16px',
              lineHeight: '1.5',
            }}>
              {popup.message}
            </p>
            <button
              onClick={() => setPopup({ show: false, type: '', message: '' })}
              style={{
                backgroundColor: popup.type === 'success' ? '#28a745' : '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.opacity = '0.8';
              }}
              onMouseOut={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
</div>
  )
}

export default Upload
