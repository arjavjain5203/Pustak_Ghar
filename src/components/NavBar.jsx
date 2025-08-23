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
    // Update both the data-theme attribute and the class for Tailwind
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
    <div className="flex justify-between items-center p-4 sticky top-0 z-50 bg-background border-b transition-colors duration-300">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-6">
          <NavigationMenuItem>
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={Logo} alt="Logo" className="w-10 h-auto" />
              <p className="text-2xl font-mono font-bold">
                <span className="text-red-500">Pustak</span>{" "}
                <span className="text-foreground">Ghar</span>
              </p>
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
      </NavigationMenu>
      
      <div className="flex items-center space-x-4">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className="font-bold"
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </Button>

        <button
          className="text-2xl cursor-pointer hover:opacity-80 transition-opacity lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default NavBar;