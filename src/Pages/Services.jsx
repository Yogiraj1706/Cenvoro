import React, { useState } from "react";
import { useEffect } from "react";

function Services() {
  const [activeService, setActiveService] = useState(null);
 useEffect(() => {
  const timer = setTimeout(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".service-card").forEach(card => {
      observer.observe(card);
    });
  }, 100); // give time for DOM to update

  return () => clearTimeout(timer);
}, [activeService]);

  useEffect(() => {
  const el = document.querySelector(`#${activeService}-detail`);
  if (el) {
    setTimeout(() => {
      el.classList.add("show");
    }, 10);
  }

  // remove animation class when closing
  return () => {
    const all = document.querySelectorAll(".service-detail");
    all.forEach(div => div.classList.remove("show"));
  };
}, [activeService]);


  useEffect(() => {
  const items = document.querySelectorAll(".benefits-list li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => {
    item.classList.add("fade-on-scroll"); // initial hidden state
    observer.observe(item);
  });
}, []);




  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Core Services</h2>

        {/* ------------------------------
            SERVICE CARDS (Visible only when no detail is active)
        ------------------------------ */}
        {activeService === null && (
          <div className="services-grid" id="services-grid">
            <div className="service-card" data-service="candidates">
              <div className="service-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="service-content">
                <h3>For Candidates</h3>
                <p>Jobs, career guidance, and skill development</p>
                <a
                  className="btn btn-outline learn-more-btn"
                  onClick={() => setActiveService("candidates")}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="service-card" data-service="institutes">
              <div className="service-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="service-content">
                <h3>For Institutes</h3>
                <p>Placement partnerships, industry training, and corporate connects</p>
                <a
                  className="btn btn-outline learn-more-btn"
                  onClick={() => setActiveService("institutes")}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="service-card" data-service="employers">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="service-content">
                <h3>For Employers</h3>
                <p>Recruitment solutions and workforce training</p>
                <a
                  className="btn btn-outline learn-more-btn"
                  onClick={() => setActiveService("employers")}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------
            SERVICE DETAILS (Shown when active)
        ------------------------------ */}
        <div className="service-details" style={{ display: activeService ? "block" : "none" }}>

          {/* ------- Candidates Details ------- */}
          <div
            className="service-detail"
            id="candidates-detail"
            style={{ display: activeService === "candidates" ? "flex" : "none" }}
          >
            <div className="service-detail-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Career Growth"
              />
            </div>

            <div className="service-detail-content">
              <h2>For Candidates - Career Growth Support</h2>
              <p>
                At CENVORO, we believe careers should be built, not just jobs filled.
                We guide individuals at every stage of their professional journey with:
              </p>

              <ul className="benefits-list">
                <li><i className="fas fa-check"></i>Access to opportunities across industries and MNCs</li>
                <li><i className="fas fa-check"></i>Resume building & interview preparation support</li>
                <li><i className="fas fa-check"></i>Skill development and mentorship programs designed to match industry expectationss</li>
              </ul>
              <h3>Key Benefits:</h3>
              <ul className="benefits-list">
                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Better career opportunities
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Improved employability skills
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Professional growth with guided mentorship
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Confidence to succeed in interviews and workplaces
                </li>
              </ul>


              <a href="#contact" className="btn">Get Started</a>
              <a href="#services" className="back-to-services" onClick={() => setActiveService(null)}>
                ← Back to Services
              </a>
            </div>
          </div>

          {/* ------- Institutes Details ------- */}
          <div
            className="service-detail"
            id="institutes-detail"
            style={{ display: activeService === "institutes" ? "flex" : "none" }}
          >
            <div className="service-detail-image">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Institute Partnerships"
              />
            </div>
            <div className="service-detail-content">
              <h2>For Institutes – Placement Partnerships</h2>
              <p>We strengthen student placement outcomes.</p>

              <ul className="benefits-list">
                <li><i className="fas fa-check"></i> Structured MoUs for smooth placement processes</li>
                <li><i className="fas fa-check"></i> Industry-ready training modules for students and alumni</li>
                <li><i className="fas fa-check"></i>Corporate connects and exclusive recruitment drives</li>
                <li><i className="fas fa-check"></i>Continuous feedback loop from employers to improve curriculum relevance</li>
              </ul>

               <h3>Key Benefits:</h3>
              <ul className="benefits-list">
                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Stronger institute–industry relationships
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Higher placement success rates
                </li>


                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Better-prepared graduates entering the workforce
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Enhanced reputation and credibility for the institute
                </li>

              </ul>

              <a href="#contact" className="btn">Partner With Us</a>
              <a href="#services" className="back-to-services" onClick={() => setActiveService(null)}>
                ← Back to Services
              </a>
            </div>
          </div>

          {/* ------- Employers Details ------- */}
          <div
            className="service-detail"
            id="employers-detail"
            style={{ display: activeService === "employers" ? "flex" : "none" }}
          >
            <div className="service-detail-image">
              <img
                src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
                alt="Recruitment Solutions"
              />
            </div>
            <div className="service-detail-content">
              <h2>For Employers – Recruitment & Training</h2>
              <p>We provide companies with efficient hiring solutions.</p>

              <ul className="benefits-list">
                <li><i className="fas fa-check"></i>End-to-end recruitment support from sourcing to onboarding</li>
                <li><i className="fas fa-check"></i> Pre-screened freshers and experienced candidates aligned with role & culture fit</li>
                <li><i className="fas fa-check"></i>Tailored corporate training in leadership, communication, and professional skills</li>
                <li><i className="fas fa-check"></i>Ongoing support to ensure better retention and workforce performance</li>
              </ul>

              <h3>Key Benefits:</h3>
              <ul className="benefits-list">
                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Faster and cost-effective hiring
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Access to industry-ready candidates
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                  Lower attrition with culture-fit hiring
                </li>

                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3Q0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMS43bDMuMSA2LjMgNyAuOTUtNS4xIDQuOTkgMS4yIDcuMDItNi4yLTMuMy02LjIgMy4zIDEuMi03LjAyLTUuMS00Ljk5IDcgLjk1eiIvPjwvc3ZnPg=="
                    alt="star"
                    className="star-icon"
                  />
                 Stronger, future-ready teams
                </li>
              </ul>


              <a href="#contact" className="btn">Find Talent</a>
              <a href="#services" className="back-to-services" onClick={() => setActiveService(null)}>
                ← Back to Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
