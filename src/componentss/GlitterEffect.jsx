import React, { useEffect, useState } from "react";
import "./GlitterEffect.css";

const GlitterEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const numParticles = 50; // Adjust number of glitter particles
    const particleArray = [];

    for (let i = 0; i < numParticles; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100, // Random X position (percentage)
        top: Math.random() * 100, // Random Y position (percentage)
        duration: Math.random() * 3 + 2, // Random animation duration (2-5 seconds)
        size: Math.random() * 3 + 2, // Random size (2-5px)
      });
    }

    setParticles(particleArray);
  }, []);

  return (
    <div className="glitter-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="glitter-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default GlitterEffect;
