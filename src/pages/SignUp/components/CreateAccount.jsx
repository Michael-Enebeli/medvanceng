import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CreateAccount.css";
import { useFormHelper } from "@/utils/FormHelper";
import SetupProfile from "./SetupProfile";
import HideNav from "@/utils/HideNav";

const CreateAccount = () => {
    const [accountCreated, setAccountCreated] = useState(false);
    
    const {
        formData,
        errors,
        isFormValid,
        showPassword,
        handleChange,
        togglePasswordVisibility,
        validateAndSubmitForm,
    } = useFormHelper(() => setAccountCreated(true));

    if (accountCreated)
        return <SetupProfile goBack={() => setAccountCreated(false)} />;

    return (
        <div id="createAccount">
            <div className="image-container">
                <img src="/images/login.jpg" alt="Signup background" />
            </div>
            <div className="form-wrapper">
                <header role="banner">
                    <Link to="/" aria-label="Back to homepage">
                        <h1>
                            Med<span>vance</span>
                        </h1>
                    </Link>
                </header>

                <div className="form-container">
                    <form onSubmit={validateAndSubmitForm} noValidate>
                        <h2>Create Account</h2>
                        <div className="input-group">
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Full name"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                            <span className="error">{errors.fullname}</span>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                id="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span className="error">{errors.email}</span>
                        </div>

                        <div className="input-group">
                            <input
                                type={
                                    showPassword.password ? "text" : "password"
                                }
                                id="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <i
                                className={`fas ${showPassword.password ? "fa-eye-slash" : "fa-eye"} toggle-password`}
                                onClick={() =>
                                    togglePasswordVisibility("password")
                                }
                            ></i>
                            <span className="error">{errors.password}</span>
                        </div>

                        <div className="input-group">
                            <input
                                type={
                                    showPassword.confirmPassword
                                        ? "text"
                                        : "password"
                                }
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <i
                                className={`fas ${showPassword.confirmPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`}
                                onClick={() =>
                                    togglePasswordVisibility("confirmPassword")
                                }
                            ></i>
                            <span className="error">
                                {errors.confirmPassword}
                            </span>
                        </div>

                        <button type="submit" disabled={!isFormValid}>
                            <i className="fas fa-user-plus"></i> Sign Up
                        </button>

                        <div className="divider">
                            <span>Or</span>
                        </div>

                        <div className="social-options">
                            <div className="social-icons">
                                <img
                                    src="/images/gmail.ico"
                                    alt="Gmail Icon"
                                    width="30"
                                />
                                <i className="fas fa-cloud"></i>
                            </div>
                        </div>

                        

                        <p>
                            Already have an account?
                            <Link
                                to="/login"
                                aria-label="Login to your account"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
    <HideNav />
        </div>
    );
};

export default CreateAccount;
