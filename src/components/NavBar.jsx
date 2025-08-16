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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (NoHeaderPaths().includes(pathname)) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`navbar-container ${
        theme === "light" ? "bg-white" : "bg-dark"
      }`}
    >
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <p
          className={`logo-text ${
            theme === "light" ? "text-black" : "text-light"
          }`}
        >
          <span className="text-danger">Pustak</span> <span>Ghar</span>
        </p>
      </div>

      <div
        className={`navbar-links ${
          menuOpen ? `show ${theme === "light" ? "bg-white" : "bg-dark"}` : ""
        }`}
      >
        <Link
          to="/"
          className={`nav-link ${
            theme === "light" ? "text-danger" : "text-danger-light"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/"
          className={`nav-link ${
            theme === "light" ? "text-black" : "text-light"
          }`}
        >
          MORE
        </Link>
        <Link
          to="/"
          className={`nav-link ${
            theme === "light" ? "text-black" : "text-light"
          }`}
        >
          JOIN
        </Link>
      </div>

      <div
        className="nav-controls"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* 🔎 Global Search Bar */}
        <div style={{ marginRight: "1rem" }}>
          <GlobalSearch branches={Branches} />
        </div>

        {/* 🌞/🌙 Theme Toggle */}
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
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>

        {/* Hamburger */}
        <div
          className={`hamburger ${
            theme === "light" ? "text-black" : "text-light"
          }`}
          onClick={toggleMenu}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") toggleMenu();
          }}
        >
          ☰
        </div>
      </div>
    </div>
  );
};

export default NavBar;
