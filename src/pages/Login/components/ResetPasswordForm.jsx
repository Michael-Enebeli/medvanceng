import React from "react";
import "../styles/ResetPasswordForm.css";
import useResetPassword from "../utils/HandleResetPassword";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const {
    token,
    setToken,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordError,
    setPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
    tokenError,
    status,
    className,
    isSubmitting,
    handleReset,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = useResetPassword();

  return (
    <div id="reset">
      <div className="image-container">
        <img src="/images/forget.png" alt="Reset password background" />
      </div>
      <div className="reset-wrapper">
        <header role="banner">
          <Link to="/" aria-label="Back to homepage">
            <h1>
              Med<span>vance</span>
            </h1>
          </Link>
        </header>
        <div className="reset-container">
          <h2>Reset Your Password</h2>
          {status && <p className={`status ${className}`}>{status}</p>}
          <form onSubmit={handleReset} className="form">
            <div className="input-group">
              <input
                type="number"
                placeholder="Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="input"
              />
              {tokenError && <p className="error">{tokenError}</p>}
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className="input"
                required
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError("");
                }}
                className="input"
                required
              />
              <button type="button" onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
              {confirmPasswordError && (
                <p className="error">{confirmPasswordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="button"
              disabled={isSubmitting || !password || !confirmPassword || !token}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </form>
          {status === "Password reset successful. You can now log in." && (
            <p className="proceed">
              Proceed to <Link to="/login">Login</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
