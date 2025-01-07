import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Let's get in touch</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
