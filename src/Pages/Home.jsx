import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");

      const size = Math.random() * 6 + 3;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.style.position = "absolute";
      particle.style.bottom = "-40px";
      particle.style.left = `${left}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.background = "rgba(255,255,255,0.5)";
      particle.style.animation = `floatUp ${duration}s linear infinite`;
      particle.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(particle);
    }

    return () => {
      particlesContainer.innerHTML = "";
    };
  }, []);

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        zIndex: 0
      }}
    >
      {/* PARTICLES — NOW ABOVE HERO */}
      <div
        id="particles"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1   // 🔥 KEY FIX
        }}
      ></div>

      {/* CONTENT — ALWAYS ON TOP */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2
        }}
      >
        <h1>AT THE CENTER OF GROWTH</h1>
        <h2>Connecting talent with opportunities</h2>

        <p>
          At CENVORO, we believe growth happens when the right people meet
          the right opportunities.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Find Jobs</button>
          <Link to="/hiretalent">
            <button className="btn-outline">Hire Talent</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
