import React, { useEffect, useState } from "react";
import leftShoe from "../assets/left-shoe.png"; // Import PNG
import rightShoe from "../assets/right-shoe.png"; // Import PNG
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      cursor.classList.remove("hidden");
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      cursor.classList.add("hidden");
    };

    // Add event listeners for mouse movement and hover states
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Clean up event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`custom-cursor ${isHovering ? "hovering" : ""}`}>
      <img src={leftShoe} alt="Left Shoe" className="shoe left-shoe" />
      <img src={rightShoe} alt="Right Shoe" className="shoe right-shoe" />
    </div>
  );
};

export default CustomCursor;