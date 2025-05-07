import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useScrollDirection from "../../utils/useScrollDirection";
import "../styles/Navbar.css";

const Navbar = () => {
  const hamburgerRef = useRef(null);
  const scrollDirection = useScrollDirection();

  const toggleHamburger = () => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("open");
    }
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  };

  useEffect(() => {
    const nav = document.getElementById("homenav");
    if (nav) {
      nav.style.transform = scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)";
    }
  }, [scrollDirection]);

  return (
    <nav id="homenav">
      <div className="nav-container">
        <div className="logo">
          <h2>Med<span>vance</span></h2>
        </div>
        <div
          className="hamburger"
          id="hamburger"
          ref={hamburgerRef}
          onClick={toggleHamburger}
        >
          <div className="line top"></div>
          <div className="line middle"></div>
          <div className="line bottom"></div>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
        </ul>

        <ul className="authentication">
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
