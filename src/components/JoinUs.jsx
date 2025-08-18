import React, { useState } from "react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Volunteer Form Submitted:", formData);

    alert("Thanks for joining us! (Demo only, data not sent to server)");

    setFormData({
      name: "",
      email: "",
      role: "",
      message: "",
    });
  };

  return (
    <div className="joinus-container">
      <h2>Join Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role (Volunteer / Donor / Other):
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinUs;
