import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from '../assets/main-logo.jpg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();
  const menuButtonRef = useRef(null);

  // Always call hooks unconditionally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Close menu on route changes
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [pathname]);

  // Early return if path matches no-navbar paths
  if (NoHeaderPaths().includes(pathname)) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`navbar-container ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      <Link to="/"  className="nav-link"> 
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
          <p className={`logo-text ${theme === "light" ? "text-black" : "text-light"}`}>
            <span style={{ color: theme === "light" ? "red" : "#ff6f61" }}>Pustak</span> <span>Ghar</span>
          </p>
        </div>
      </Link>

      <div className={`navbar-links ${menuOpen ? `show ${theme === "light" ? "bg-white" : "bg-dark"}` : ""}`}>
        <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>HOME</Link>
        <Link to="/resources" className={`nav-link ${pathname === "/resources" ? "active" : ""}`}>MORE</Link>
        <Link to="/join" className={`nav-link ${pathname === "/join" ? "active" : ""}`}>JOIN</Link>
        <Link to="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>ABOUT</Link>
        <Link to="/contribute" className={`nav-link ${pathname === "/contribute" ? "active" : ""}`}>CONTRIBUTE</Link>
        <Link to="/upload" className={`nav-link ${pathname === "/upload" ? "active" : ""}`}>UPLOAD</Link>
      </div>

      <div className="nav-controls" style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
          className={`theme-toggle-btn ${theme}`}
          style={{
            marginRight: "1rem",
            cursor: "pointer",
            borderRadius: "4px",
            border: "none",
            padding: "0.3rem 0.7rem",
            backgroundColor: theme === "light" ? "#ffeb3b" : "#222",
            color: theme === "light" ? "#000" : "#ffeb3b",
            fontWeight: "bold",
          }}
        >
          {theme === "light" ? "🌙 Dark": "🌞 Light"}
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className={`hamburger ${menuOpen ? "is-active" : ""} ${theme === "light" ? "text-black" : "text-light"}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger-box" aria-hidden="true">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
