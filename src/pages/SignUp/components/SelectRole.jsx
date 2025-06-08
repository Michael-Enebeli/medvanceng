import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import '../styles/SelectRole.css';
import CreateAccount from './CreateAccount'; 

function SelectRole() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight >= 650) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleRoleSelect = (role) => {
    sessionStorage.setItem('selectedRole', role);
    navigate('create_account'); 
  };

  return (
    <div id="signUp">
      <header role="banner">
      <Link to="/" aria-label="Back to homepage">
        <h1>
          Med<span>vance</span>
        </h1>
        </Link>
      </header>

      <main role="main">
        <h2>Welcome to Smart Medicine</h2>
        <p id="description">
          Skip the waiting room, get diagnosed in your PJs while our doctors bring their white coats to the web.
        </p>

        <button
          type="button"
          aria-label="Sign up as a user"
          aria-describedby="description"
          onClick={() => handleRoleSelect('user')}
        >
          Sign up as a user
        </button>

        <button
          type="button"
          aria-label="Sign up as a practitioner"
          aria-describedby="description"
          onClick={() => handleRoleSelect('practitioner')}
        >
          Sign up as a practitioner
        </button>

        <p>
          Already have an account? 
          <Link to="/login" aria-label="Login to your account">Login</Link>
        </p>
      </main>

    
      <Routes>
        <Route path="create" element={<CreateAccount />} /> 
      </Routes>
    </div>
  );
}

export default SelectRole;
