import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Services() {

  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeService !== null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.35 }
    );

    const elements = document.querySelectorAll(
      ".animate-img, .animate-text"
    );

    elements.forEach((el) => {
      el.classList.remove("show"); // reset
      observer.observe(el);
    });
  }
)

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title" style={{color:"white"}}>Our Services</h2>

        <>
          {/* Candidates */}
          <div className="service-row">
            <div className="service-circle animate-img">
              <img
                src="/Candidates.jpeg"
                alt="Institute Partnership"
                className="service-circle-image"
              />
            </div>

            <div className="service-text animate-text">
              <h3>For Candidates</h3>
              <p>
                Jobs, career guidance, resume building, interview preparation,
                and skill development for long-term career success.
              </p>
              <button
                className="btn-primary"
                onClick={() => navigate("/services/candidates")}
                style={{width:"200px"}}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Institutes */}
          <div
            className="service-row reverse"
            style={{
              background:
                "linear-gradient(135deg, #f8f9fd 0%, #f5f6fc 50%, #cccccc 100%)",
            }}
          >
            <div className="service-circle animate-img">
              <img
                src="/Institutes.jpeg"
                alt="Institute Partnership"
                className="service-circle-image"

              />
            </div>

            <div className="service-text animate-text">
              <h3>For Institutes</h3>
              <p>
                Placement partnerships, industry-aligned training,
                and strong corporate connections.
              </p>
              <button
                className="btn-primary"
                onClick={() => navigate("/services/institutes")}
                style={{width:"200px"}}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Employers */}
          <div className="service-row">
            <div className="service-circle animate-img">
              <img
                src="/Employers.jpeg"
                alt="Institute Partnership"
                className="service-circle-image"
              />
            </div>

            <div className="service-text animate-text">
              <h3>For Employers</h3>
              <p>
                Recruitment solutions, workforce training,
                and talent development programs.
              </p>
              <button
                className="btn-primary"
                onClick={() => navigate("/services/employers")}
                style={{width:"200px"}}
              >
                Learn More
              </button>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}

export default Services;

