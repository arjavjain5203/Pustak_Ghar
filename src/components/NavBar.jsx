import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from '../assets/main-logo.jpg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  if (NoHeaderPaths().includes(pathname)) {
    return null;
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container bg-white">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <p className="logo-text">
          <span className="text-danger">Pustak</span> <span className="text-black">Ghar</span>
        </p>
      </div>
      <div className={`navbar-links ${menuOpen ? "show bg-white" : ""}`}>
        <Link to="/" className="nav-link text-danger">HOME</Link>
        <Link to="/" className="nav-link text-black">MORE</Link>
        <Link to="/" className="nav-link text-black">JOIN</Link>
      </div>
      <div className="hamburger text-black" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default NavBar;
