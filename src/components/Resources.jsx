// src/components/Resources.jsx
import React from 'react';
import './Resources.css';
import { FaTools, FaUserGraduate, FaQuestionCircle, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const Resources = () => {
  const moreOptions = [
    {
      title: "Study Tools",
      icon: <FaTools className="option-icon" />,
      description: "Enhance your study sessions with our specialized tools",
      items: ["Grade Calculator", "CGPA Analyzer", "Study Planner", "Flashcard Generator"]
    },
    {
      title: "Student Guides", 
      icon: <FaUserGraduate className="option-icon" />,
      description: "Essential guides for college life and beyond",
      items: ["Internship Handbook", "Research Paper Guide", "Campus Survival Tips", "Scholarship Finder"]
    },
    {
      title: "Academic Help",
      icon: <FaQuestionCircle className="option-icon" />,
      description: "Get support for your academic challenges",
      items: ["Ask a Tutor", "Subject Forums", "Doubt Clearing", "Workshop Schedule"]
    },
    {
      title: "University Services",
      icon: <FaCalendarAlt className="option-icon" />,
      description: "Access important university resources",
      items: ["Exam Timetable", "Library Portal", "Faculty Contacts", "Campus Map"]
    }
  ];

  return (
    <div className="more-options-container">
      {/* Header Section */}
      <header className="more-options-header">
        <h1>MORE ACADEMIC TOOLS</h1>
        <p className="subtitle">
          Additional resources to complement your studies beyond standard materials
        </p>
      </header>

      {/* Options Grid */}
      <section className="options-grid">
        {moreOptions.map((option, index) => (
          <div key={index} className="option-card">
            <div className="card-icon-container">
              {option.icon}
            </div>
            <div className="card-content">
              <h2>{option.title}</h2>
              <p>{option.description}</p>
              <ul>
                {option.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="view-button">View Options</button>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <h3>Frequently Needed</h3>
        <div className="quick-links">
          <button>Academic Calendar</button>
          <button>Faculty Directory</button>
          <button>Campus Map</button>
          <button>Research Portal</button>
        </div>
      </section>
    </div>
  );
};

export default Resources;