import React from "react";
import "./Auth.css"; // common styles

function Signup() {
  return (
    <div className="auth-container">
      <div className="form-box">
        <h1>Create Account</h1>
        <p className="subtitle">Join <span>Pustak Ghar</span></p>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <p className="switch">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
