import React from "react";
import "../styles/AboutMedvance.css";

const AboutMedvance = () => {
  return (
    <section className="about-medvance">
      <div className="about-text">
        <h2>About <span>Medvance</span></h2>
        <p>
          Medvance is a virtual health platform that connects users with verified medical
          professionals through seamless, secure, and user-friendly technology.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/nurse.jpg" alt="Nurse at Medvance" />
      </div>
    </section>
  );
};

export default AboutMedvance;
