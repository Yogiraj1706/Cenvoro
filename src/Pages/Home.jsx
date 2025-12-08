import React from "react";
import { useEffect } from "react";

function Home() {

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

  document
    .querySelectorAll(".about-text, .about-image")
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  
  
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
        <div className="particles" id="particles"></div>
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

    </>
  );
}

export default Home;
