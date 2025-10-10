import React, { useState ,useRef } from "react";
import "./Join.css"; 
import Read from '../assets/read-unscreen.gif';

const Join = () => {
  // perks
  const perks = [
    {
      icon: "📖",
      title: "Unlimited Access",
      desc: "Explore a wide collection of free books across categories.",
    },
    {
      icon: "🤝",
      title: "Community of Learners",
      desc: "Connect, share, and grow with like-minded readers.",
    },
    {
      icon: "☁️",
      title: "Upload & Share",
      desc: "Contribute your own books and knowledge with the world.",
    },
    {
      icon: "🔔",
      title: "Get Recommendations",
      desc: "Receive updates on trending books and personalized suggestions.",
    },
  ];
  // form validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const formRef = useRef(null);
  const perksRef = useRef(null);
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPerks = () =>{
    perksRef.current.scrollIntoView({behavior:"smooth"})
  }

  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
  let newErrors = {};
  if (!isLogin && !formData.name.trim()) newErrors.name = "Name is Required";
  if (!formData.email.trim()) newErrors.email = "Email is Required";
  if (!formData.password.trim()) newErrors.password = "Password is required";
  if (!isLogin && !formData.role.trim()) newErrors.role = "Please choose a role";
  return newErrors;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submit successfully!");
    }
  };
  return (
    <div className="join-container">
      {/* hero section */}
      <div className="hero-content">
        <div className="read-animation">
          <img src={Read} alt="read" id="readMe" />
        </div>
        <h1>
          Join <span className="join-highlight">Pustak Ghar</span>{" "}
          <div className="tooltip-box">
            A Community for Book Lovers and Knowledge Seekers
          </div>
        </h1>
        <p>
          A home for readers, contributors, and knowledge seekers. Access
          thousands of books, share your collection, and connect with a
          community that loves learning.
        </p>
        <div className="hero-button">
          <button className="btn-primary" onClick={scrollToForm}>Join Now</button>
          <button className="btn-secondary" onClick={scrollToPerks}>Learn More</button>
        </div>
      </div>
      {/* perks section */}
      <section ref={perksRef} className="perks-section">
        <h2>
          Why Join <span className="card-highlight">Pustak Ghar</span>?
        </h2>
        <div className="perks-grid">
          {perks.map((perk, index) => (
            <div key={index} className="perk-card">
              <div className="perk-icon">{perk.icon}</div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* join form */}
      <section ref={formRef} className="join-form-section">
        <div className="join-form-card">
          <h2>Create Your Account</h2>
          <p className="join-subtitle">
            Become a Part of <span className="card-highlight">Pustak Ghar</span>{" "}
            today!
          </p>
          <form onSubmit={handleSubmit}>
            {/* Full Name - only for Register */}
{!isLogin && (
  <div className="form-group">
    <label htmlFor="name">Full Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter Your Full Name.."
    />
    {errors.name && <p className="error">{errors.name}</p>}
  </div>
)}

{/* Email */}
<div className="form-group">
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter Your Email.."
  />
  {errors.email && <p className="error">{errors.email}</p>}
</div>

{/* Password */}
<div className="form-group">
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Enter Your Password"
  />
  {errors.password && <p className="error">{errors.password}</p>}
</div>

{/* Role - only for Register */}
{!isLogin && (
  <div className="form-group">
    <label> Join Us</label>
    <select
      defaultValue={""}
      name="role"
      value={formData.role}
      onChange={handleChange}
    >
      <option value="" disabled>
        -- Choose Role --
      </option>
      <option value="reader">📚 Reader</option>
      <option value="contributor">✍️ Contributor</option>
    </select>
    {errors.role && <p className="error">{errors.role}</p>}
  </div>
)}

{/* Submit button */}
<button type="submit" className="btn-primary">
  {isLogin ? "Login" : "Join Now"}
</button>

{/* Toggle link */}
<p className="login-text">
  {isLogin ? (
    <>
      Don't have an account?{" "}
      <span
        style={{ color: "var(--hightlight-text)", cursor: "pointer" }}
        onClick={() => setIsLogin(false)}
      >
        Register
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span
        style={{ color: "var(--hightlight-text)", cursor: "pointer" }}
        onClick={() => setIsLogin(true)}
      >
        Login
      </span>
    </>
  )}
</p>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Join;
