import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Employers() {
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
            style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh",

                background: `
repeating-linear-gradient(
  135deg,
  rgba(255,255,255,0.05) 0px,
  rgba(255,255,255,0.05) 2px,
  transparent 2px,
  transparent 14px
),
linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)
`
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
            <h2 className="heading animate-content show underline-heading" style={{ margin: "5px", textAlign: "center", fontSize:"35px"}
                }>
                    Our Services
                </h2>
            <div className="service-detail">
                <div className="service-detail-content">
                    <h2 className="animate-content">For Employers - Recruitment & Training</h2>
                    <p className="animate-content">
                        We provide companies with efficient hiring solutions aligned to business goals, culture, and long-term growth.
                    </p>

                    <ul className="benefits-list animate-list">
                        <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>End-to-end recruitment support</li>
                        <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Pre-screened candidates aligned with role & culture fit</li>
                        <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Tailored corporate training programs</li>
                        <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i>Ongoing workforce performance support</li>
                    </ul>

                    <h3 className="animate-content">Key Benefits:</h3>
                    <ul className="benefits-list animate-list">
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Faster and cost-effective hiring</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Access to industry-ready candidates</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Lower attrition rates</li>
                        <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Stronger, future-ready teams</li>
                    </ul>

                    <a href="/hiretalent" className="btn-primary animate-content"  style={{ textDecoration: "none" }}>Find Talent</a>
                    <span
                        className="back-to-services"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "services" } });
                        }}
                    >
                        ← Back to Services
                    </span>
                </div>

                <div className="service-detail-image animate-image">
                    <img 
                        src="/Candidate.jpeg" 
                        alt="Recruitment Solutions" 
                    />
                </div>
            </div>
            </div>
        </section>
    );
}

export default Employers;
