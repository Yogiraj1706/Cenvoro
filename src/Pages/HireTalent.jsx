import "./HireTalent.css"
import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { MuiTelInput } from "mui-tel-input";

function HireTalent() {

    function FormSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="form-section">
      <div
        className="section-header"
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "25px 0 10px",
          fontWeight: "600",
          fontSize: "18px",
          color: "rgb(3,58,140)",
        }}
      >
        <span>{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && <div className="section-content">{children}</div>}
    </div>
  );
}
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);

    const handlePhoneChange = (value, country) => {
        setPhone(value);

        // basic validation (min length by country)
        if (value.length < country.dialCode.length + 6) {
            setError("Please enter a valid phone number");
        } else {
            setError("");
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        /* Observe hero, cards, and form */
        const hero = document.querySelector(".hire-hero");
        const cards = document.querySelectorAll(".hire-card");
        const form = document.querySelector(".hire-form-wrapper");

        if (hero) observer.observe(hero);
        cards.forEach((card) => observer.observe(card));
        if (form) observer.observe(form);

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <div className="blur-bg"
                style={{
                    "--bg-image":
                        "url('https://t3.ftcdn.net/jpg/06/27/47/28/360_F_627472893_v2tJ71F6BCRMfTXsnxEJiFjtDFNTjVGt.jpg')",
                }}>

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
                        <h2
                            style={{
                                fontSize: "30px",
                                fontWeight: "700",
                                color: "rgb(3,58,140)",
                                marginBottom: "35px",
                            }}
                        >
                            Start Your Hiring Journey
                        </h2>

                        <form className="hire-form">
                            {/* ===== Company Details ===== */}
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" placeholder="Your company name" />
                            </div>

                            <div className="form-group">
                                <label>Contact Person</label>
                                <input type="text" placeholder="Your full name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="your.email@company.com" />
                            </div>

                              <div className="form-group">
                                <label>Phone</label>
                                <MuiTelInput
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry="IN"
                                    forceCallingCode
                                    fullWidth
                                    size="medium"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Company Address</label>
                                <textarea
                                    rows="2"
                                    placeholder="Company address (City, State, Country)"
                                />
                            </div>

                            {/* ===== Job Details ===== */}

                             <FormSection title="Job Details">
                <div className="form-group">
                  <label>Position to Fill</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label>Number of Positions</label>
                  <input type="number" min="1" />
                </div>

                <div className="form-group">
                  <label>Employment Type</label>
                  <select>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Experience Level</label>
                  <select>
                    <option>Fresher</option>
                    <option>Mid-Level</option>
                    <option>Senior</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Work Mode</label>
                  <select>
                    <option>Onsite</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label>Number of Positions</label>
                  <input type="number" min="1" />
                </div>
              </FormSection>
                          

                            {/* ===== Compensation & Timeline ===== */}

                            <FormSection title="Compensation & Timeline">
                <div className="form-group">
                  <label>Salary Range</label>
                  <input type="text" placeholder="₹6–10 LPA" />
                </div>

                <div className="form-group">
                  <label>Urgency</label>
                  <select>
                    <option>Immediate</option>
                    <option>Within 1 Month</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Joining Timeline</label>
                  <select>
                    <option>Within 15 Days</option>
                    <option>Within 30 Days</option>
                    <option>1–3 Months</option>
                  </select>
                </div>
              </FormSection>


                            {/* ===== Requirements ===== */}
                            <div className="form-group full-width">
                                <label>Key Skills / Requirements</label>
                                <textarea
                                    rows="4"
                                    placeholder="Mention required skills, experience, tools, or expectations"
                                />
                            </div>
                            <div className="form-group">
                                <label>Upload Job Description (Optional)</label>

                                {!file && (
                                    <input
                                        type="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                )}

                                {file && (
                                    <div className="uploaded-file">
                                        <span>{file.name}</span>
                                        <button
                                            type="button"
                                            className="cancel-btn"
                                            onClick={() => setFile(null)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="submit-btn">
                                Submit Hiring Request
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </>
    );
}

export default HireTalent;
