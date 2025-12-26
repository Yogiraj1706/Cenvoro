import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send Email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent refresh

    emailjs
    emailjs.send(
      "service_phd16to",
      "template_t1ulqok",
      {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      },
      "v28GVeI8dl0N01xYt"
    )

      .then(
        () => {
          alert("Message sent successfully!");

          // Clear Inputs
          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  // Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(document.querySelector(".contact-info"));
    document.querySelectorAll(".contact-item").forEach((item) => observer.observe(item));
    observer.observe(document.querySelector(".contact-form"));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2
          className="section-title"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Get In Touch
        </h2>

        <div className="contact-container">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Reach out to us for any inquiries or to learn more about our services.</p>

            <a href="mailto:connect@hirecenvoro.com" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>connect@hirecenvoro.com</p>
                </div>
              </div>
            </a>

            <a href="tel:+918976246255" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 8976246255 / +91 8650592915</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=4th+floor+Zenia+building+Hiranandani+circle+Hiranandani+business+park+Thane+Maharashtra+400607"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    4th floor Zenia building,<br />
                    Hiranandani circle, Hiranandani business park,<br />
                    Thane, Maharashtra - 400607
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h3>Start Your Career Journey with CENVORO</h3>

            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Mobile No.</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                id="mobile"
                name="mobile"
                className="form-control"
                required
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setFormData({ ...formData, mobile: value });
                }}
                maxLength="10"
              />
              </div>


              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
