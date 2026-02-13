import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // HOME → always scroll to top
  const goHome = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ABOUT / SERVICES / CONTACT
  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
      
      {/* LOGO */}
      <div
        className="nav-left"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span
          onClick={goHome}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="/LOGO.png"
            alt="CENVORO Logo"
            style={{ height: "35px" }}
          />
          <strong style={{ marginLeft: "10px", fontSize: "18px" }}>
            CENVORO
          </strong>
        </span>
      </div>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        ref={hamburgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul
        className={`nav-center ${menuOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <li>
          <a onClick={goHome} style={{ cursor: "pointer" }}>
            Home
          </a>
        </li>

        <li>
          <a
            onClick={() => goToSection("about")}
            style={{ cursor: "pointer" }}
          >
            About
          </a>
        </li>

        <li>
          <a
            onClick={() => goToSection("services")}
            style={{ cursor: "pointer" }}
          >
            Services
          </a>
        </li>

        <li>
          <a
            onClick={() => goToSection("jobs")}
            style={{ cursor: "pointer" }}
          >
            Find Jobs
          </a>
        </li>

        <li>
          <Link
            to="/hiretalent"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Hire Talent
          </Link>
        </li>

        <li>
          <a
            onClick={() => goToSection("contact")}
            style={{ cursor: "pointer" }}
          >
            Contact
          </a>
        </li>

        {/* MOBILE LOGIN BUTTON */}
        {menuOpen && (
          <li>
            <button
              className="login-btn"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Login
            </button>
          </li>
        )}
      </ul>

      {/* DESKTOP LOGIN BUTTON */}
      {!menuOpen && (
        <button
          className="login-btn"
          onClick={() => {
            navigate("/login");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
}
