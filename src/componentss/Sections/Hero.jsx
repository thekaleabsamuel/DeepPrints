import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center vh-100"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <div className="container">
        <motion.h1
          className="display-3 fw-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Mission
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Where technology meets entertainment to create transformative digital
          experiences. We're pioneering innovative solutions that help brands
          connect with their audiences in meaningful and memorable ways.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
