import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/signup");
    };

 return (
        <header id="home">
            <div className="bg-wrapper">
                <div className="hero">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
                            <circle cx="12" cy="12" r="4" fill="#444" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="M5 5l1.5 1.5" />
                            <path d="M17.5 17.5L19 19" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="M5 19l1.5-1.5" />
                            <path d="M17.5 6.5L19 5" />
                        </svg>
                        <span>Simple, Accessible, and Affordable for Everyone</span>
                    </div>

                    <h1>
                        Quality <span>Healthcare</span>, Anytime and Anywhere
                    </h1>
                    <p>
                         with certified medical professionals and gain access to prescription interpretation and counseling through telemedicine and smart health solutions.
                    </p>
                    <button onClick={handleGetStarted}>
                        Get Started <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;