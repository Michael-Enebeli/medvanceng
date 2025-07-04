import React from "react";
import { useDeliveryForm } from "../utils/UseDeliveryForm";

export default function DeliveryPage({ setDeliveryMethod, setView }) {
  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    dropdownOpen,
    setDropdownOpen,
    dropdownRef,
    STATES,
    isValid
  } = useDeliveryForm();

  const proceed = () => {
    if (isValid) {
      setDeliveryMethod("home");
      setView("payment");
    }
  };

  return (
    <div className="delivery-form">
      <h2>Delivery Information</h2>
      <p>Please fill in the information below <br /><small>All fields are required</small></p>
      <hr />

      {/* First & Last Name */}
      <form> 
      <div className="input-row">
        <div className="input-field">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={e => handleChange("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
          />
          {errors.firstName && <small>{errors.firstName}</small>}
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={e => handleChange("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
          />
          {errors.lastName && <small>{errors.lastName}</small>}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="input-row">
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={e => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="input-field">
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={e => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>
      </div>

      {/* City & State */}
      <div className="input-row">
        <div className="input-field">
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={e => handleChange("city", e.target.value)}
            onBlur={() => handleBlur("city")}
          />
          {errors.city && <small>{errors.city}</small>}
        </div>

        <div className="input-field">
          <div className="dropdown-wrapper" ref={dropdownRef}>
            <div
              className={`dropdown-input ${dropdownOpen ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={formData.state ? "selected" : "placeholder"}>
                {formData.state || "Select State"}
              </span>
              <i className={`fas fa-chevron-down ${dropdownOpen ? "rotate" : ""}`}></i>
            </div>

            <div className={`dropdown-menu ${dropdownOpen ? "visible" : ""}`}>
              {STATES.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    handleChange("state", s);
                    setDropdownOpen(false);
                  }}
                  className={`dropdown-option ${formData.state === s ? "active" : ""}`}
                >
                  <div className="circle-wrapper">
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                  </div>
                  <span>{s}</span>
                </button>
              ))}
            </div>
          </div>
          {errors.state && <small>{errors.state}</small>}
        </div>
      </div>

      {/* Address */}
      <div className="input-field full-width">
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={e => handleChange("address", e.target.value)}
          onBlur={() => handleBlur("address")}
        />
        {errors.address && <small>{errors.address}</small>}
      </div>

      {/* Remember checkbox */}
      <label className="remember-checkbox">
        <input
          type="checkbox"
          checked={formData.remember}
          onChange={e => handleChange("remember", e.target.checked)}
        />
        Remember this info for next time
      </label>

      <button
        className="next-btn"
        onClick={proceed}
        disabled={!isValid}
      >
        Proceed to Payment
      </button>
         </form>
    </div>
  );
}
