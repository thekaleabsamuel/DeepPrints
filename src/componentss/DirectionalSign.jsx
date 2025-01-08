import React from "react";
import "./DirectionalSign.css";
import signImage from "../assets/direction.png"; // Replace with your directional signs PNG

const DirectionalSigns = () => {
  const sections = [
    { id: "home", label: "DeepPrints" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="directional-signs-container">
      <h1 className="site-title">Welcome to Deep Prints</h1>
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
    </div>
  );
};

export default DirectionalSigns;
