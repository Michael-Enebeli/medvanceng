import React, { useEffect, useState } from 'react';
import '../styles/LoginForm.css';
import { Link } from 'react-router-dom';
import HandleLogin from '../utils/HandleLogin';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);


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

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('email') || '';
    const savedPassword = sessionStorage.getItem('password') || '';
    const savedRememberMe = sessionStorage.getItem('rememberMe') === 'true';

    setEmail(savedEmail);
    setPassword(savedPassword);
    setRememberMe(savedRememberMe);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      valid = false;
    }

        if (valid) {
          setIsLoggingIn(true);
          try {
            await HandleLogin(navigate);
          } finally {
            setIsLoggingIn(false);
          }
    }
  };

  return (
    <div id="login">
      <div className="image-container">
        <img src="/images/login.jpg" alt="Login background" />
      </div>
      <div className="login-wrapper">
      <header role="banner">
        <Link to="/" aria-label="Back to homepage">
          <h1>
            Med<span>vance</span>
          </h1>
        </Link>
      </header>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                sessionStorage.setItem('email', value);
                setEmailError('');
                setPasswordError('');
              }}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
                sessionStorage.setItem('password', value);
                setEmailError('');
                setPasswordError('');
              }}
            />
            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowPassword(!showPassword)}> </i>
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setRememberMe(checked);
                  sessionStorage.setItem('rememberMe', checked);
                }}
              />
              Remember me
            </label>
            <Link to="/password/forget">Forgot password?</Link>
          </div>

          <button type="submit" disabled={!email || !password || isLoggingIn}>
            <i className="fas fa-sign-in-alt"></i> {isLoggingIn ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-options">
          <div className="social-icons">
            <img src="/images/gmail.ico" 
                alt="Gmail Icon"
                width="30" 
                />
            
            <i className="fas fa-cloud"></i>
          </div>
        </div>

        <p>
          Don't have an account?  <Link to="/signup" aria-label="Create an account">Sign up</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;