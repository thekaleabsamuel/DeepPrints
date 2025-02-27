import React from "react";

const About = () => {
  return (
    <section id="about" className="about bg-black text-light py-5 w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="display-5 fw-bold mb-3">What We Do</h2>
            <p className="lead">
              Deep Prints is more than just a consulting firm – we're innovation
              architects shaping the future of entertainment technology. Founded
              with a vision to bridge the gap between traditional entertainment
              and cutting-edge technology, we've grown into a dynamic force in
              the industry.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div
              className="placeholder-image bg-secondary rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{ height: "200px", width: "200px" }}
            >
              <span className="text-light">Your Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
