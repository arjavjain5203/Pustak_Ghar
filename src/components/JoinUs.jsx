import React, { useState } from "react";
import "./JoinUs.css";

function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("volunteerData", JSON.stringify(formData));
    alert("Form saved locally!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="joinus-container">
      <h2>Join Us as a Volunteer</h2>
      <p>
        Be a part of <strong>Pustak Ghar</strong> and help us build a stronger
        knowledge-sharing community.Share your skills, and creativity-together,
        we can make learning accessible to everyone!
      </p>

      <form className="joinus-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Your Skills / Role</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g. Content Writing, Design, Coding..."
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default JoinUs;
