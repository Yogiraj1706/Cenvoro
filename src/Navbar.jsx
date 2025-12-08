import React, { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{ fontFamily: '"Segoe UI", sans-serif' }}>

      <div className="nav-left" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/LOGO.png"
          alt="CENVORO Logo"
          style={{
            height: "45px",
            width: "auto",
          }}
        />
        <a href="/">CENVORO</a>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-center ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#jobs">Find Jobs</a></li>
        <li><a href="#talent">Hire Talent</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="login-btn" style={{ fontFamily: '"Segoe UI", sans-serif' }}>
        Login
      </button>
    </nav>
  );
}
