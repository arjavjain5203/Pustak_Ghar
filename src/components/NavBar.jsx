import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from '../assets/main-logo.jpg';
import { Button } from "./ui/button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();

  // Always call hooks unconditionally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Early return if path matches no-navbar paths
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            <div className="navbar-logo">
              <img src={Logo} alt="Logo" className="logo-img" />
              <p className={`logo-text ${theme === "light" ? "text-black" : "text-light"}`}>
                <span className="text-danger">Pustak</span> <span>Ghar</span>
              </p>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>HOME</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/more" className={navigationMenuTriggerStyle()}>MORE</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>JOIN</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about" className={navigationMenuTriggerStyle()}>ABOUT</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contribute" className={navigationMenuTriggerStyle()}>CONTRIBUTE</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/upload" className={navigationMenuTriggerStyle()}>UPLOAD</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="nav-controls" style={{ display: "flex", alignItems: "center" }}>
        <Button
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
          }}>{theme === "light" ? "🌞 Light" : "🌙 Dark"}</Button>

        <div
          className={`hamburger ${theme === "light" ? "text-black" : "text-light"}`}
          onClick={toggleMenu}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") toggleMenu(); }}
        >
          ☰
        </div>
      </div>
    </NavigationMenu>
  );
};

export default NavBar;