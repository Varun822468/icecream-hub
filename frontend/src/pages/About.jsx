import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <h2>About This Project</h2>
      <p>
        Welcome to <strong>Chill Ice</strong> 🍨 - a creative web project designed
        to showcase smooth design, animations, and a user-friendly interface.
      </p>
      <p>
        This project contains:
        <ul>
          <li>🏠 A modern homepage with animations and clean navigation.</li>
          <li>ℹ️ About page describing the purpose and creator details.</li>
          <li>📩 Contact page with a working form and pop-up confirmation.</li>
          <li>✨ Beautiful UI/UX with gradients, transitions, and responsive design.</li>
        </ul>
      </p>
      <p>
        👨‍💻 <strong>Made By:</strong> Varun T B
      </p>
      <p>
        🎓 <strong>From :</strong> MVJ College Of Engineering, Bengaluru
      </p>

      <p>
        🌐 <strong>Connect with me:</strong>
      </p>
      {/* Social Media Icons Centered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/varun-t-b-8a454931b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "32px", color: "#0A66C2" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Varun822468"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "32px", color: "black" }}
        >
          <FaGithub />
        </a>
      </div>

      <p style={{ marginTop: "20px" }}>
        💻 <strong>Technologies Used:</strong> HTML,  CSS,  JavaScript (React.js)
      </p>
      <p>
        🚀 <strong>Note:</strong> This is a <em>frontend-only project</em> built
        to demonstrate design and interactivity. No backend services are used.
      </p>
    </div>
  );
};

export default About;
