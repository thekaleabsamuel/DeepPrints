import React, { useEffect, useState } from "react";
import leftShoe from "../assets/left-shoe.png"; // Import PNG
import rightShoe from "../assets/right-shoe.png"; // Import PNG
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicking ? "walking" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img src={leftShoe} alt="Left Shoe" className="shoe left-shoe" />
      <img src={rightShoe} alt="Right Shoe" className="shoe right-shoe" />
    </div>
  );
};

export default CustomCursor;
