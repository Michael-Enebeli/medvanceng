import React from "react";
import "../styles/Bridge.css";
import { Link } from "react-router-dom";

const Bridge = () => {
  return (
    <section className="bridge">
      <div className="bridge-text">
        <h2>Bridging the Gap Between Patients & Healthcare Providers</h2>
        <p>
        At MedvanceNG, we are on a mission to revolutionize healthcare in Nigeria through innovative technology. We believe every Nigerian deserves quality medical care, regardless of location or income level.
        </p>
        
        <div className="bridge-link">
          <Link to="/contact">Learn more</Link>
          <i className="fas fa-chevron-right"></i>
        </div>

      </div>
      <div className="bridge-image">
        <img src="/images/bridgeImg.png" alt="Nurse at Medvance" />
      </div>
    </section>
  );
};

export default Bridge;
