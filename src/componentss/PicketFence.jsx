import React from "react";
import "./PicketFence.css";

const PicketFence = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="picket-fence">
      {sections.map((section) => (
        <button
          key={section.id}
          className="picket"
          onClick={() => handleScroll(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default PicketFence;
