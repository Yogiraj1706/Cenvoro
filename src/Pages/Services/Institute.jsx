import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Institute() {
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
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh"
            }}
        >
            {/* Blurred Background */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                        "url('/INSTITUTES1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(12px)",
                    transform: "scale(1.1)",
                    zIndex: 0
                }}
            />

            {/* Dark overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    zIndex: 1
                }}
            />

            {/* Main Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "0px 10px"
                }}
            >
            <h2 className="section-title animate-content" style={{ margin: "4px" }}>Our Services</h2>
            <div className="service-detail">
                <div className="service-detail-content">
                    <h2 className="animate-content">For Institutes - Placement Partnerships</h2>
                    <p className="animate-content">We strengthen student placement outcomes by aligning institutes with evolving industry hiring needs.</p>
                    <ul className="benefits-list animate-list animate-content">
                        <li className="animate-item"><i className="fas fa-check"></i> Structured MoUs for smooth placement processes</li>
                        <li className="animate-item"><i className="fas fa-check"></i> Industry-ready training modules for students and alumni</li>
                        <li className="animate-item"><i className="fas fa-check"></i> Corporate connects and exclusive recruitment drives</li>
                        <li className="animate-item"><i className="fas fa-check"></i> Continuous employer feedback to improve curriculum relevance</li>
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
                        }}>Partner WithUs</a>
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
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                        alt="Institute Partnerships"
                    />
                </div>
            </div>
            </div>
        </section>
    );
}

export default Institute;
