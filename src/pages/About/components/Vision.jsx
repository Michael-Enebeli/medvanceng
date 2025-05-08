import React from "react";
import "../styles/Vision.css";

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-text">
        <h2>Our Vision</h2>
        <p>
          At <span>Medvance</span>, we believe that accessing quality healthcare should be simple,
          fast, and stress-free. That’s why we created a platform that brings smart health services
          right to your fingertips.
        </p>
      </div>
      <div className="vision-image">
        <img src="/images/nursing.jpg" alt="Healthcare Vision" />
      </div>
    </section>
  );
};

export default Vision;
