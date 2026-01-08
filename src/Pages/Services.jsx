import React, { useState, useEffect } from "react";

function Services() {
  const [activeService, setActiveService] = useState(null);


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

    return () => observer.disconnect();
  }, [activeService]);


useEffect(() => {
  if (!activeService) return;

  const content = document.querySelector(".service-detail-content");
  const image = document.querySelector(".service-detail-image");

  if (content && image) {
    content.classList.remove("animate-content");
    image.classList.remove("animate-image");

    // force reflow to restart animation
    void content.offsetWidth;

    content.classList.add("animate-content");
    image.classList.add("animate-image");
  }
}, [activeService]);


  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        {/* =================================================
            SERVICE OVERVIEW (GREY CIRCLE + ICON)
        ================================================= */}
        {activeService === null && (
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
                  style={{
                    width: "fit-content",
                    padding: "12px 32px",
                  }}
                  onClick={() => setActiveService("candidates")}
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
                  src="/Institute.jpeg"
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
                  style={{
                    width: "fit-content",
                    padding: "12px 32px",
                  }}
                  onClick={() => setActiveService("institutes")}
                >
                  Learn More
                </button>
              </div>
            </div>


            {/* Employers */}
            <div className="service-row">
              <div className="service-circle animate-img">
                <img
                  src="/Employee.jpeg"
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
                  style={{
                    width: "fit-content",
                    padding: "12px 32px",
                  }}
                  onClick={() => setActiveService("employers")}

                  
                >
                  Learn More
                </button>
              </div>
            </div>
          </>
        )}

        {/* =================================================
            SERVICE DETAILS (ORIGINAL CONTENT – UNTOUCHED)
        ================================================= */}
        <div
          className="service-details"
          style={{ display: activeService ? "block" : "none" }}
        >

          {/* ================= Candidates ================= */}
          {activeService === "candidates" && (
            <div className="service-detail">
              <div className="service-detail-content animate-content">
                <h2>For Candidates - Career Growth Support</h2>
                <p>
                  At CENVORO, we believe careers should be built, not just jobs filled.
                  We guide individuals at every stage of their professional journey with:
                </p>

                <ul className="benefits-list">
                  <li><i className="fas fa-check"></i>Access to opportunities across industries and MNCs</li>
                  <li><i className="fas fa-check"></i>Resume building & interview preparation support</li>
                  <li><i className="fas fa-check"></i>
                    Skill development and mentorship programs designed to match
                    industry expectations
                  </li>
                </ul>

                <h3>Key Benefits:</h3>
                <ul className="benefits-list">
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Better career opportunities</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Improved employability skills</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Professional growth with guided mentorship</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Confidence to succeed in interviews and workplaces</li>
                </ul>

                <a href="#contact" className="btn-primary">Get Started</a>
                <span className="back-to-services" onClick={() => setActiveService(null)}>
                  ← Back to Services
                </span>
              </div>

              <div className="service-detail-image animate-image">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Career Growth"
                />
              </div>
            </div>
          )}

          {/* ================= Institutes ================= */}
          {activeService === "institutes" && (
            <div className="service-detail">
              <div className="service-detail-content animate-content">
                <h2>For Institutes - Placement Partnerships</h2>
                <p>We strengthen student placement outcomes.</p>

                <ul className="benefits-list">
                  <li><i className="fas fa-check"></i> Structured MoUs for smooth placement processes</li>
                  <li><i className="fas fa-check"></i> Industry-ready training modules for students and alumni</li>
                  <li><i className="fas fa-check"></i> Corporate connects and exclusive recruitment drives</li>
                  <li><i className="fas fa-check"></i> Continuous employer feedback to improve curriculum relevance</li>
                </ul>


                <h3>Key Benefits:</h3>
                <ul className="benefits-list">
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Stronger institute-industry relationships</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Higher placement success rates</li>
                  <li><i className="fas fa-star"style={{ color: "#ff9800", marginRight: "10px" }}></i>Better-prepared graduates</li>
                  <li><i className="fas fa-star"style={{ color: "#ff9800", marginRight: "10px" }}></i>Enhanced institute reputation and credibility</li>
                </ul>

                <a href="#contact" className="btn-primary" style={{
                  width: "fit-content",
                  padding: "12px 32px",
                }}>Partner With Us</a>
                <span className="back-to-services" onClick={() => setActiveService(null)}>
                  ← Back to Services
                </span>
              </div>

              <div className="service-detail-image animate-image">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Institute Partnerships"
                />
              </div>
            </div>
          )}

          {/* ================= Employers ================= */}
          {activeService === "employers" && (
            <div className="service-detail">
              <div className="service-detail-content animate-content">
                <h2>For Employers - Recruitment & Training</h2>
                <p>We provide companies with efficient hiring solutions.</p>

                <ul className="benefits-list">
                  <li><i className="fas fa-check"></i>End-to-end recruitment support</li>
                  <li><i className="fas fa-check"></i>Pre-screened candidates aligned with role & culture fit</li>
                  <li><i className="fas fa-check"></i>Tailored corporate training programs</li>
                  <li><i className="fas fa-check"></i>Ongoing workforce performance support</li>
                </ul>

                <h3>Key Benefits:</h3>
                <ul className="benefits-list">
                  <li>
                    <i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }} />
                    Faster and cost-effective hiring
                  </li>
                  <li>
                    <i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }} />
                    Access to industry-ready candidates
                  </li>
                  <li>
                    <i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }} />
                    Lower attrition rates
                  </li>
                  <li>
                    <i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }} />
                    Stronger, future-ready teams
                  </li>
                </ul>



                <a href="/hiretalent" className="btn-primary">Find Talent</a>
                <span className="back-to-services" onClick={() => setActiveService(null)}>
                  ← Back to Services
                </span>
              </div>

              <div className="service-detail-image animate-image">
                <img
                  src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
                  alt="Recruitment Solutions"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
