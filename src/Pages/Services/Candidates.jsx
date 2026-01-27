import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Candidates() {
    const navigate = useNavigate();

    useEffect(() => {
  window.scrollTo(0, 0);

  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-content");

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 120) {
        el.classList.add("show");
      }
    });
  };

  // Run once AFTER small delay (so nothing appears instantly)
  setTimeout(() => {
    handleScroll();
  }, 400);

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  window.scrollTo(0, 0);

  const items = document.querySelectorAll(".animate-item");

  const revealItems = () => {
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 250); // 👈 controls speed (bigger = slower)
      }
    });
  };

  window.addEventListener("scroll", revealItems);

  // nothing appears until scroll
  return () => window.removeEventListener("scroll", revealItems);
}, []);



    return (
        <section className="service-detail-page">
            <h2 className="section-title animate-content" style={{ margin: "5px" }}>
                Our Services
            </h2>

            <div className="service-detail">
                <div className="service-detail-content">
                    <h2 className="animate-content">
                        For Candidates - Career Growth Support
                    </h2>

                    <p className="animate-content">
                        At CENVORO, we believe careers should be built, not just jobs filled.
                        We guide individuals at every stage of their professional journey with:
                    </p>

                    <ul className="benefits-list animate-list animate-content">
                        <li className="animate-item"><i className="fas fa-check"></i>Access to opportunities across industries and MNCs</li>
                        <li className="animate-item"><i className="fas fa-check"></i>Resume building & interview preparation support</li>
                        <li className="animate-item">
                            <i className="fas fa-check"></i>
                            Skill development and mentorship programs designed to match
                            industry expectations
                        </li>
                    </ul>

                    <h3 className="animate-content">Key Benefits:</h3>

                    <ul className="benefits-list animate-list animate-content">
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Better career opportunities</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Improved employability skills</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Professional growth with guided mentorship</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Confidence to succeed in interviews and workplaces</li>
                    </ul>

                    <a
                        className="btn-primary animate-content"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "contact" } });
                        }}
                    >
                        Get Started
                    </a>

                    <span
                        className="back-to-services animate-content"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "services" } });
                        }}
                    >
                        ← Back to Services
                    </span>
                </div>

                <div className="service-detail-image animate-image" style={{ zIndex: "0" }}>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                        alt="Career Growth"
                    />
                </div>
            </div>
        </section>
    );
}

export default Candidates;
