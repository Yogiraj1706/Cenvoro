import React from "react";

function Home() {
  
              function createParticles() {
                const particlesContainer = document.getElementById('particles');
                const particleCount = 30;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Random properties
                    const size = Math.random() * 5 + 2;
                    const left = Math.random() * 100;
                    const animationDuration = Math.random() * 20 + 10;
                    const animationDelay = Math.random() * 5;
                    
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${left}%`;
                    particle.style.animationDuration = `${animationDuration}s`;
                    particle.style.animationDelay = `${animationDelay}s`;
                    
                    particlesContainer.appendChild(particle);
                }
            }
            
            createParticles();

  return (
    <>
      <section className="hero">
        <div class="particles" id="particles"></div>
        <div className="hero-content">
          <h1>AT THE CENTER OF GROWTH</h1>
          <h2>Connecting talent with opportunities</h2>

          <p>
            At CENVORO, we believe growth happens when the right people meet
            the right opportunities. We bridge corporates, institutes, and
            professionals to build future-ready teams.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Find Jobs</button>
            <button className="btn-outline">Hire Talent</button>
          </div>
        </div>
      </section>


      <section className="about" id="about">

        <div className="container">
          <h2 className="section-title">About CENVORO</h2>

          <div className="about-content">
            {/* LEFT TEXT */}
            <div className="about-text">
              <p>
                At CENVORO, we believe growth happens when the right people meet
                the right opportunities. We are a consultancy that bridges
                corporates, institutes, and professionals to build future-ready
                teams.
              </p>

              <p>Our mission is simple:</p>

              <ul className="mission-list">
                <li>
                  <i className="fas fa-check-circle"></i> Help companies hire
                  smarter
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Help candidates grow
                  faster
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Help institutes enable
                  better placements
                </li>
              </ul>

              <p>
                With strict compliance, data privacy, and personalized solutions,
                CENVORO stands as a trusted partner for long-term success.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="CENVORO Team"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
