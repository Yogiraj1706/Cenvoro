import "./HireTalent.css"
import { useEffect } from "react";


function HireTalent() {

    useEffect(() => {
        const elements = document.querySelectorAll(".animate");

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

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="hire-hero animate hero-animate">
                <h1>Hire Top Talent</h1>
                <p>
                    Connect with pre-screened, industry-ready professionals. Build your dream
                    team with candidates who match your culture and requirements.
                </p>
            </div>

            <section className="hire-talent-section">
                <div className="hire-cards">

                    {/* Card 1 */}
                    <div className="hire-card animate fade-up delay-1">
                        <div className="icon red">
                            🎯
                        </div>
                        <h3>Targeted Recruitment</h3>
                        <p>
                            Get access to candidates specifically matched to your role
                            requirements, company culture, and growth stage.
                        </p>
                        <ul>
                            <li className="animate fade-left delay-2">Pre-screened candidates</li>
                            <li className="animate fade-left delay-3">Culture-fit assessment</li>
                            <li className="animate fade-left delay-4">Skills verification</li>
                            <li className="animate fade-left delay-5">Background checks</li>
                        </ul>

                    </div>

                    {/* Card 2 */}
                    <div className="hire-card animate fade-up delay-3">
                        <div className="icon blue">
                            ⚡️
                        </div>
                        <h3>Fast Hiring</h3>
                        <p>
                            Reduce your time-to-hire with our streamlined process and
                            ready-to-interview candidate pool.
                        </p>
                        <ul>
                            <li className="animate fade-left delay-2">48-hour candidate delivery</li>
                            <li className="animate fade-left delay-3">Interview scheduling support</li>
                            <li className="animate fade-left delay-4">Offer negotiation assistance</li>
                            <li className="animate fade-left delay-5">Onboarding guidance</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="hire-card animate fade-up delay-4">
                        <div className="icon green">
                            📈
                        </div>
                        <h3>Growth Support</h3>
                        <p>
                            Beyond hiring, we provide ongoing support to ensure your new hires
                            succeed and grow with your company.
                        </p>
                        <ul>
                            <li className="animate fade-left delay-2">Performance tracking</li>
                            <li className="animate fade-left delay-3">Retention strategies</li>
                            <li className="animate fade-left delay-4">Team integration support</li>
                            <li className="animate fade-left delay-5">Continuous feedback</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="hire-form-wrapper animate fade-up">
                <div className="hire-form-card">
                    <h2>Start Your Hiring Journey</h2>

                    <form className="hire-form">
                        <div className="form-group animate fade-up delay-1">
                            <label>Company Name</label>
                            <input type="text" placeholder="Your company name" />
                        </div>

                        <div className="form-group animate fade-up delay-1">
                            <label>Contact Person</label>
                            <input type="text" placeholder="Your full name" />
                        </div>

                        <div className="form-group animate fade-up delay-1">
                            <label>Email</label>
                            <input type="email" placeholder="your.email@company.com" />
                        </div>

                        <div className="form-group animate fade-up delay-1">
                            <label>Phone</label>
                            <input type="tel" placeholder="+91 98765 43210" />
                        </div>

                        <div className="form-group animate fade-up delay-1">
                            <label>Position to Fill</label>
                            <input type="text" placeholder="e.g. Senior Developer" />
                        </div>

                        <div className="form-group animate fade-up delay-1">
                            <label>Urgency</label>
                            <select>
                                <option>Immediate (1–2 weeks)</option>
                                <option>Short Term (1 month)</option>
                                <option>Flexible</option>
                            </select>
                        </div>

                        <div className="form-group animate fade-up delay-1 full-width">
                            <label>Job Requirements</label>
                            <textarea
                                rows="5"
                                placeholder="Describe the role, required skills, experience level, and any specific requirements..."
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Submit Hiring Request
                        </button>
                    </form>
                </div>
            </section>

        </>
    );
}

export default HireTalent;
