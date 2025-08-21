import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from "../assets/main-logo.jpg";
import GlobalSearch from "./GlobalSearch";
import Branches from "./Branches";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (NoHeaderPaths().includes(pathname)) return null;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const goTo = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div
      className={`navbar-container ${
        theme === "light" ? "bg-white" : "bg-dark"
      }`}
    >
      {/* Logo */}
      <div className="navbar-logo" onClick={() => goTo("/")}>
        <img src={Logo} alt="Logo" className="logo-img" />
        <p
          className={`logo-text ${
            theme === "light" ? "text-black" : "text-light"
          }`}
        >
          <span className="text-danger">Pustak</span> <span>Ghar</span>
        </p>
      </div>

      {/* Links */}

      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-danger" : "text-danger-light"
          }`}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-black" : "text-light"
          }`}
          to="/more"
          onClick={() => setMenuOpen(false)}
        >
          MORE
        </Link>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-black" : "text-light"
          }`}
          to="/join"
          onClick={() => setMenuOpen(false)}
        >
          JOIN
        </Link>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-danger" : "text-light"
          }`}
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-danger" : "text-light"
          }`}
          to="/contribute"
          onClick={() => setMenuOpen(false)}
        >
          CONTRIBUTE
        </Link>
        <Link
          className={`nav-link ${
            theme === "light" ? "text-black" : "text-light"
          }`}
          to="/upload"
          onClick={() => setMenuOpen(false)}
        >
          UPLOAD
        </Link>

      </div>

      {/* Controls: Search, Theme, Hamburger */}
      <div
        className="nav-controls"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ marginRight: "1rem" }}>
          <GlobalSearch branches={Branches} />
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
          className={`theme-btn ${theme === "light" ? "text-black" : "text-light"}`}
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>

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