import { Link } from "react-router-dom";
import "../styles/BridgeGap.css"; 

export default function BridgeGap() {
  return (
    <main className="bridge-container">
      <section>
          <h2>Bridging the Gap Between Patients & Healthcare Providers</h2>
          <p>
            At MedvanceNG, we are on a mission to revolutionize healthcare in
            Nigeria through innovative technology. We believe every Nigerian
            deserves quality medical care, regardless of location or income
            level.
          </p>
        <div className="bridge-link">
          <Link to="/contact">Learn more</Link>
          <i className="fas fa-chevron-right"></i>
        </div>
      </section>

      <section className="bridge-image">
          <img src="/images/bridgeImg.png" alt="Bridge gap illustration" />
      </section>
    </main>
  );
}
