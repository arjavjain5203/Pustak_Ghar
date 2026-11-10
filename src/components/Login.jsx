import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Make sure your styles are here

function Login() {
  return (
    <div className="auth-container">
      <div className="form-box">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to <span>Pustak Ghar</span></p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="switch">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
