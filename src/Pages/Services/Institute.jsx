import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Institute() {
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

                background: `linear-gradient(120deg,
        rgba(4, 9, 30, 0.92),
        rgba(7, 22, 60, 0.92)),
        url("/bg-1.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
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
                        <h2 className="animate-content">For Institutes - Placement Partnerships</h2>
                        <p className="animate-content">We strengthen student placement outcomes by aligning institutes with evolving industry hiring needs.</p>
                        <ul className="benefits-list animate-list animate-content">
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i> Structured MoUs for smooth placement processes</li>
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i> Industry-ready training modules for students and alumni</li>
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i> Corporate connects and exclusive recruitment drives</li>
                            <li className="animate-item"><i className="fas fa-check" style={{ color: "white" }}></i> Continuous employer feedback to improve curriculum relevance</li>
                        </ul>


                        <h3 className="animate-content">Key Benefits:</h3>
                        <ul className="benefits-list animate-list animate-content">
                            <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Stronger institute-industry relationships</li>
                            <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Higher placement success rates</li>
                            <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Better-prepared graduates</li>
                            <li className="animate-item"><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Enhanced institute reputation and credibility</li>
                        </ul>

                        <a className="btn-primary animate-content"
                            onClick={() => {
                                navigate("/", { state: { scrollTo: "contact" } });
                            }}>Partner With Us</a>
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
                            src="/Institutesimage.jpeg"
                            alt="Institute Partnerships"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Institute;
