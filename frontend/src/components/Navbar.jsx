// src/components/Navbar.jsx
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h3 className="logo">Chill Ice</h3>
      </div>
      <nav style={{ padding: "1rem", background: "#1" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        Contact
      </Link>
      <Link to="/icecream" style={{ color: "white", textDecoration: "none" }}>
        Icecream
      </Link>
    </nav>
      <div className="icon">
        <GiHamburgerMenu size={24} />
      </div>
    </div>
  );
};

export default Navbar;
