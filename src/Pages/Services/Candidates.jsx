import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Candidates() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        let hasScrolled = false;

        const handleFirstScroll = () => {
            hasScrolled = true;
            window.removeEventListener("scroll", handleFirstScroll);
        };

        window.addEventListener("scroll", handleFirstScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && hasScrolled) {

                        const parent = entry.target;
                        const items = parent.querySelectorAll(
                            ".animate-content, .animate-item, .animate-image"
                        );

                        items.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add("show");
                            }, index * 200); // one-by-one speed
                        });

                        observer.unobserve(parent);
                    }
                });
            },
            {
                threshold: 0.25,
            }
        );

        const sections = document.querySelectorAll(".service-detail-content");

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleFirstScroll);
        };
    }, []);


    return (
        <section
  className="candidates-bg"
  style={{
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0%, transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(255,255,255,0.05) 0%, transparent 40%),
      radial-gradient(circle at 0% 80%, rgba(255,255,255,0.05) 0%, transparent 40%),
      linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)
    `,
    
  }}
>

            {/* Main Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "10px 20px"
                }}
            >
                <h2 className="heading animate-content show underline-heading" style={{ margin: "5px", textAlign: "center", fontSize: "35px" }
                }>
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
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Access to opportunities across industries and MNCs</li>
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Resume building & interview preparation support</li>
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Skill development and mentorship programs designed to match industry expectations </li>
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
                            className="back-to-services"
                            onClick={() => {
                                navigate("/", { state: { scrollTo: "services" } });
                            }}
                        >
                            ← Back to Services
                        </span>
                    </div>

                    <div className="service-detail-image animate-image" style={{ zIndex: "0" }}>
                        <img
                            src="/Candidatesimage.jpeg"
                            alt="Career Growth"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Candidates;
