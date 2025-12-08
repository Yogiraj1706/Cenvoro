import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe left side contact info container
    observer.observe(document.querySelector(".contact-info"));

    // Observe each contact-item
    document.querySelectorAll(".contact-item").forEach((item) => {
      observer.observe(item);
    });

    // Observe right side form
    observer.observe(document.querySelector(".contact-form"));

    return () => observer.disconnect();
  }, []);

  return (


    <section className="contact" id="contact">

      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Reach out to us for any inquiries or to learn more about our services.</p>

            <a
              href="mailto:connect@hirecenvoro.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
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


            <a
              href="tel:+918976246255"
              style={{ textDecoration: "none", color: "inherit" }}
            >
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

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>

            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Mobile No.</label>
                <input type="text" id="subject" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" required></textarea>
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
