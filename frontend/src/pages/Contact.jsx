import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <Navbar />
      <h2>📩 Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out.
      </p>

      <div className="contact-info">
        <p><strong>📍 Address:</strong> Ice Cream World, 123 Sweet Street, Flavor Town, India</p>
        <p><strong>📞 Phone:</strong> +91 9696525241</p>
        <p><strong>📧 Email:</strong> chillice143@gmail.com</p>
        <p><strong>🕒 Opening Hours:</strong> Mon – Sun: 11:00 AM – 11:00 PM</p>
      </div>

      <div className="contact-form">
        <h3>💬 Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          ✅ Your message has been sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
