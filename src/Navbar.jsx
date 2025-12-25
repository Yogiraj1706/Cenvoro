import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";


export default function Navbar() {

    const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
      <div
        className="hamburger"
        ref={hamburgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-center ${menuOpen ? "open" : ""}`} ref={menuRef}>
      <li><Link to="/">Home</Link></li>

      <li onClick={() => goToSection("about")}><a style={{ cursor: "pointer" }}>About</a></li>
      <li onClick={() => goToSection("services")}><a style={{ cursor: "pointer" }}>Services</a></li>
      <li onClick={() => goToSection("jobs")}><a style={{ cursor: "pointer" }}>Find Jobs</a></li>

      <li>
        <Link to="/hiretalent" onClick={() => window.scrollTo(0, 0)}>
          Hire Talent
        </Link>
      </li>

      <li onClick={() => goToSection("contact")}><a style={{ cursor: "pointer" }}>Contact</a></li>


        {/* Show login button INSIDE menu on mobile */}
        {menuOpen && (
          <li>
            <button
              className="login-btn"
              style={{
                width: "100%",
                marginTop: "10px",
                fontFamily: '"Segoe UI", sans-serif'
              }}
            >
              Login
            </button>
          </li>
        )}
      </ul>

      {/* Desktop login button ONLY */}
      {!menuOpen && (
        <button
          className="login-btn"
          style={{ fontFamily: '"Segoe UI", sans-serif' }}
        >
          Login
        </button>
      )}
    </nav>
  );
}
