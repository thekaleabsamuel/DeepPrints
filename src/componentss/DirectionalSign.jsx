import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./DirectionalSign.css";
import signImage from "../assets/picket3.png"; // Replace with your directional sign PNG

const DirectionalSigns = () => {
  const [opacity, setOpacity] = useState(1); // State to track particle opacity

  const sections = [
    { id: "home", label: "DeepPrints" },
    { id: "about", label: "Our Mission" },
    { id: "what", label: "What We Do"},
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine); // Load the slim version of tsparticles
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 100; // Start fading at this scroll position
      const fadeEnd = 500; // Fully faded at this scroll position

      // Calculate opacity (1 at top, 0 after fadeEnd)
      const newOpacity = Math.max(0, Math.min(1, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="directional-signs-container">
      {/* Snowfall Effect with Dynamic Opacity */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: opacity }, // Dynamic opacity
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "bottom", out_mode: "out" },
          },
          interactivity: {
            events: { onHover: { enable: false }, onClick: { enable: false } },
          },
        }}
      />

      <h1 className="site-title"></h1>
      <div className="directional-signs">
        <img src={signImage} alt="Directional Signs" className="sign-image" />
        <div className="sign-navigation">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`sign-button sign-button-${index + 1}`}
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Sketched Grass */}
      <div className="grass-container"></div>
    </div>
  );
};

export default DirectionalSigns;
