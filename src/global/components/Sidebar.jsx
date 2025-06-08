import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const sidebarRef = useRef(null);

  const handleClose = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.remove("open");
    }
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
      hamburger.classList.remove("open");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside id="sidebar" ref={sidebarRef}>
      <button type="button" onClick={handleClose}>&times;</button>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="authentication">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
