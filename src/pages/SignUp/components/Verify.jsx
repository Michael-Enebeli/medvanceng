import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  useStoredEmailOrRedirect,
  handleOTPPaste,
  handleOTPInput,
  useVerifyButton,
} from '../utils/HandleVerification';

import ResendOtpButton from './ResendOtpButton';
import '../styles/Verify.css';


export default function Verify() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const {
    isButtonEnabled,
    isSubmitting,
    checkIfButtonShouldBeEnabled,
    handleSubmit: handleVerifySubmit,
  } = useVerifyButton(inputRefs);

  useStoredEmailOrRedirect(setEmail);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);


  const handleSetStatus = (message, className) => {
    setStatus(message);
    setStatusClass(className);
  };

  const handleSubmit = (e) =>
    handleVerifySubmit(e, email, handleSetStatus);

  return (
    <div id="verify">
      <div className="image-container">
        <img src="/images/login.jpg" alt="Verify background" />
      </div>

      <div className="verify-wrapper">
        <header role="banner">
          <Link to="/" aria-label="Back to homepage">
            <h1>
              Med<span>vance</span>
            </h1>
          </Link>
        </header>

        <div className="verify-container">
          <h2 className="verify-header">Email Verification</h2>

          <p className="verify-description">
            We sent a 6-digit OTP to <strong>{email || '...'}</strong>
            <br />
            Check your email to view
          </p>

          <hr />

          <p className="instruction-text">
            Please keep this tab open to continue this process.
          </p>

          {status && (
            <p
              className={`status-text ${
                statusClass === 'success'
                  ? 'success'
                  : statusClass === 'error'
                  ? 'error'
                  : statusClass === 'loading'
                  ? 'loading'
                  : ''
              }`}
            >
              {status}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div
              onPaste={(e) =>
                handleOTPPaste(
                  e,
                  inputRefs.current,
                  checkIfButtonShouldBeEnabled
                )
              }
              className="otp-container"
            >
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  {i === 3 && <span className="otp-separator">-</span>}
                  <input
                    type="text"
                    maxLength="1"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    ref={(el) => (inputRefs.current[i] = el)}
                    onInput={(e) =>
                      checkIfButtonShouldBeEnabled &&
                      handleOTPInput(
                        e,
                        i,
                        inputRefs.current,
                        checkIfButtonShouldBeEnabled
                      )
                    }
                    className="otp-input"
                    required
                  />
                </React.Fragment>
              ))}
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting || !isButtonEnabled}
            >
              {isSubmitting ? 'Verifying...' : 'Verify'}
            </button>

          </form>

          <ResendOtpButton />
        </div>
      </div>
    </div>
  );
}
