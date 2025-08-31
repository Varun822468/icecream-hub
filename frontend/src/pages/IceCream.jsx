import React from "react";
import Navbar from "../components/Navbar";
import "./IceCream.css";

const IceCream = () => {
  return (
    <div className="icecream">
      <Navbar />
      <h2>Our Ice Cream Flavors</h2>
      <div className="flavors">
        <div className="flavor">
          <img src="/images/section2.png" alt="Strawberry" />
          <h3>Sweet Strawberry</h3>
        </div>
        <div className="flavor">
          <img src="/images/c1.png" alt="Chocolate" />
          <h3>Creamy Chocolate</h3>
        </div>
        <div className="flavor">
          <img src="/images/pista-bg.png" alt="Pistachio" />
          <h3>Nutty Pistachio</h3>
        </div>
        <div className="contact-message">
          <h3>💬 Get in Touch</h3>
          <p>
            Have a suggestion or craving for a new flavor? Drop us a message and
            our team will get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IceCream;
