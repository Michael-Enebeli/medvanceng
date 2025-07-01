import React from 'react';
import useForgetPassword from '../utils/handleForgetPassword';
import '../styles/ForgetPasswordForm.css';
import { Link } from 'react-router-dom';


const ForgotPasswordForm = () => {
  const { email, setEmail, status, isSubmitting, handleSubmit } = useForgetPassword();

  return (
    <div id="forget">
      <div className="image-container">
        <img src="/images/forget.png" alt="Forget password background" />
      </div>
      <div className="forget-wrapper">
      <header role="banner">
        <Link to="/" aria-label="Back to homepage">
          <h1>
            Med<span>vance</span>
          </h1>
        </Link>
      </header>
        <div className="forget-container">
      <h2 className="heading">Forgot Password</h2>
      <p className="description">Enter your email to get a One Time Password</p>
      {status.message && (
        <p className={`status ${status.className === 'success' ? 'success' : 'error'}`}>
          {status.message}
        </p>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? "Sending" : 'Send OTP'}
        </button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
