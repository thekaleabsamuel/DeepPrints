import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Deep Prints</h1>
        <p>
          Where technology meets entertainment to create transformative digital experiences. 
          We're pioneering innovative solutions that help brands connect with their audiences 
          in meaningful and memorable ways.
        </p>
        <p>
          Our team of expert consultants works at the intersection of entertainment and 
          technology, delivering cutting-edge strategies that drive engagement and foster growth. 
          Whether you're looking to revolutionize your digital presence or enhance your 
          entertainment offerings, Deep Prints is your trusted partner in innovation.
        </p>
        <h2>What We Do</h2>
        <ul>
          <li>Strategic Technology Consulting</li>
          <li>Entertainment Industry Solutions</li>
          <li>Digital Innovation Development</li>
          <li>Brand Experience Enhancement</li>
          <li>Future-Forward Implementation</li>
        </ul>
        <p>
          Our proven track record of success spans across multiple industries, helping brands 
          stay ahead of the curve in an ever-evolving digital landscape.
        </p>
        {/* <button className="cta-button">Learn More</button> */}
      </div>
    </section>
  );
};

export default Hero;