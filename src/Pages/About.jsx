import React, { useEffect } from "react";

function About() {

  useEffect(() => {
    const items = document.querySelectorAll(".mission-list li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".about-text, .about-image");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <section className="about" id="about">

        <div className="container">
          <h2 className="section-title">About CENVORO</h2>

          <div className="about-content">
            {/* LEFT TEXT */}
            <div className="about-text">
              <p>
                CENVORO exists to connect ambition with opportunity.<br></br>
                We partner with corporates, institutes, and professionals to create future-ready talent ecosystems
              </p>

              <p>Our mission is simple yet powerful:</p>

              <ul className="mission-list">
                <li>
                  <i className="fas fa-check-circle"></i> Enable smarter hiring for companies
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Accelerate professional growth
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Strengthen placement outcomes for institutes
                </li>
              </ul>

              <p>
                With a foundation of compliance, data security, and tailored solutions, CENVORO delivers partnerships that grow with you.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="CENVORO Team"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
