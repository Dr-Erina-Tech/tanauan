import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo and Title */}
        <div className="logo-container">
          <img src="/src/assets/navbar/tanauan.svg" alt="Logo" className="logo-image" />
        
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {["Home", "About", "News", "Services", "Contact"].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              className="hover-underline-animation"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Search Box, Menu, and Login */}
        <div className="menu-login-container">
          <SearchBox /> {/* Add search box here */}
          <Link to="/" className="login-button">
            Login
          </Link>
          <Menu
            size={28}
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
