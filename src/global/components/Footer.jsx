import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <Link to="/" aria-label="To homepage">
          <h2>
            Med<span>vance</span>
          </h2>
        </Link>

        <nav>
          <h4>Company</h4>
          <ul>
            <li><a href="#h">Home</a></li>
            <li><a href="#a">About Us</a></li>
            <li><a href="#c">Careers</a></li>
          </ul>
        </nav>

        <nav>
          <h4>Information</h4>
          <ul>
            <li><a href="#f">FAQs</a></li>
            <li><a href="#h">Help Centers</a></li>
            <li><a href="#s">Support</a></li>
          </ul>
        </nav>

        <nav>
          <h4>Legal</h4>
          <ul>
            <li><a href="#t">Terms & Conditions</a></li>
            <li><a href="#p">Privacy Policy</a></li>
          </ul>
        </nav>

        <nav className="contact-info">
          <h4>Contact</h4>
          <a
            href="https://www.google.com/maps?q=234+Ikeja+Lagos+state+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLocationOn size={20} style={{ strokeWidth: 2 }} />
            234, Ikeja Lagos state, Nigeria
          </a>
          <a href="mailto:info@medvanceng.com">
            <CiMail size={20} style={{ strokeWidth: 2 }} /> info@medvanceng.com
          </a>
          <a href="tel:+23481000000000">
            <FiPhone size={20} style={{ strokeWidth: 2 }} /> +23481000000000
          </a>
          <div className="social-icons">
            <a href="#l"><i className="fab fa-linkedin" /></a>
            <a href="#t"><i className="fab fa-x-twitter" /></a>
            <a href="#i"><i className="fab fa-instagram" /></a>
            <a href="#f"><i className="fab fa-facebook" /></a>
          </div>
        </nav>
      </div>
      <hr />
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MedVanceNg. All rights reserved</span>
        <input type="text" placeholder="English" />
      </div>
    </footer>
  );
};

export default Footer;
