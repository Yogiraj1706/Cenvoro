import React, { useEffect } from "react";

function Footer() {

    useEffect(() => {
  const columns = document.querySelectorAll(".footer-column");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.3 }
  );

  columns.forEach((col) => observer.observe(col));
}, []);


  return (
    <footer>
      <div className="container">
        <div className="footer-content">

          {/* Column 1 */}
          <div className="footer-left">
            <h3>CENVORO</h3>

            <p className="tagline">
              Connecting talent with opportunities to build future ready teams.
            </p>

            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/cenvoro/"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>


          {/* Column 2 */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#jobs">Find Jobs</a></li>
              <li><a href="#talent">Hire Talent</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">For Candidates</a></li>
              <li><a href="#services">For Institutes</a></li>
              <li><a href="#services">For Employers</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>
                <i className="fa-solid fa-envelope"></i> connect@hirecenvoro.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +91 8976246255 / +91 8650592915
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i> 4th floor Zenia building,<br></br>
                Hiranandani circle, Hiranandani <br>
                </br>business park, Thane, Maharashtra - 400607
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-divider"></div>

        <p>© 2025 CENVORO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
