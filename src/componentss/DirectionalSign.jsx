import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./DirectionalSign.css";

const SignModel = () => {
  const { scene } = useGLTF("/src/assets/picket2.glb"); // Load 3D sign
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

const DirectionalSigns = () => {
  const [opacity, setOpacity] = useState(1);

  const sections = [
    { id: "home", label: "DeepPrints" },
    { id: "about", label: "Our Mission" },
    { id: "what", label: "What We Do" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 100, fadeEnd = 500;
      const newOpacity = Math.max(0, Math.min(1, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="directional-signs-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: opacity },
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
        {/* 3D Model */}
        <Canvas camera={{ position: [0, 1.5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <SignModel />
          <OrbitControls />
        </Canvas>

        {/* Navigation Buttons */}
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

      <div className="grass-container"></div>
    </div>
  );
};

export default DirectionalSigns;
