import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from "../assets/main-logo.jpg";
import GlobalSearch from "./GlobalSearch";
import Branches from "./Branches"; // Import the dataset

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Hide navbar for specified paths
  if (NoHeaderPaths().includes(pathname)) return null;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`navbar-container ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      {/* Logo */}
      <Link to="/" className="navbar-logo-link">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
          <p className={`logo-text ${theme === "light" ? "text-black" : "text-light"}`}>
            <span className="text-danger">Pustak</span> <span>Ghar</span>
          </p>
        </div>
      </Link>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? `show ${theme === "light" ? "bg-white" : "bg-dark"}` : ""}`}>
        <Link to="/" className={`nav-link ${theme === "light" ? "text-danger" : "text-danger-light"}`}>HOME</Link>
        <Link to="/more" className={`nav-link ${theme === "light" ? "text-black" : "text-light"}`}>MORE</Link>
        <Link to="/" className={`nav-link ${theme === "light" ? "text-black" : "text-light"}`}>JOIN</Link>
        <Link to="/about" className={`nav-link ${theme === "light" ? "text-danger" : "text-light"}`}>ABOUT</Link>
        <Link to="/contribute" className={`nav-link ${theme === "light" ? "text-danger" : "text-light"}`}>CONTRIBUTE</Link>
        <Link to="/upload" className={`nav-link ${theme === "light" ? "text-black" : "text-light"}`}>UPLOAD</Link>
      </div>

      {/* Controls: Search, Theme, Hamburger */}
      <div className="nav-controls" style={{ display: "flex", alignItems: "center" }}>
        {/* 🔎 Global Search */}
        <div style={{ marginRight: "1rem" }}>
          <GlobalSearch branches={Branches} />
        </div>

        {/* 🌞/🌙 Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
          className={`theme-btn ${theme === "light" ? "text-black" : "text-light"}`}
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>

        {/* ☰ Hamburger Menu */}
        <div
          className={`hamburger ${theme === "light" ? "text-black" : "text-light"}`}
          onClick={toggleMenu}
          onKeyDown={(e) => { if (e.key === "Enter") toggleMenu(); }}
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer", fontSize: "1.5rem", marginLeft: "1rem" }}
          aria-label="Toggle menu"
        >
          ☰
        </div>
      </div>
    </div>
  );
};

export default NavBar;