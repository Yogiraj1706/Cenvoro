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
                At CENVORO, we believe growth happens when the right people meet
                the right opportunities. We are a consultancy that bridges
                corporates, institutes, and professionals to build future-ready
                teams.
              </p>

              <p>Our mission is simple:</p>

              <ul className="mission-list">
                <li>
                  <i className="fas fa-check-circle"></i> Help companies hire
                  smarter
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Help candidates grow
                  faster
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Help institutes enable
                  better placements
                </li>
              </ul>

              <p>
                With strict compliance, data privacy, and personalized solutions,
                CENVORO stands as a trusted partner for long-term success.
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
