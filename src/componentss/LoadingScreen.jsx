import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";
import logo from "../assets/DPLOGO.png"; // Replace with your logo path

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds for the animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;