import React, { useState, useEffect } from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import "../styles/ContactSection.css";

const ContactSection = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const savedInputValues = JSON.parse(sessionStorage.getItem('formInputData'));
  const savedSubmittedValues = JSON.parse(sessionStorage.getItem('formSubmittedData'));

  const [formValues, setFormValues] = useState(savedInputValues || initialValues);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (formValues.firstName || formValues.lastName || formValues.email || formValues.phone || formValues.message) {
      sessionStorage.setItem('formInputData', JSON.stringify(formValues));
    }
  }, [formValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormErrors({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formValues.firstName) {
      errors.firstName = 'First Name is required';
      formIsValid = false;
    } else if (/\d/.test(formValues.firstName)) {
      errors.firstName = 'First Name should not contain numbers';
      formIsValid = false;
    }

    if (formValues.lastName && /\d/.test(formValues.lastName)) {
      errors.lastName = 'Last Name should not contain numbers';
      formIsValid = false;
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is not valid';
      formIsValid = false;
    }

    if (!formValues.message) {
      errors.message = 'Message is required';
      formIsValid = false;
    }

    if (formValues.phone && formValues.phone.length !== 11) {
      errors.phone = 'Phone Number must be 11 digits';
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sessionStorage.setItem('formSubmittedData', JSON.stringify(formValues));
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      sessionStorage.removeItem('formInputData');
      alert('Form submitted successfully!');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-text">
        <h2>Connect with us for your healthcare needs</h2>
        <p>
          Reach out for support, feedback, or to schedule an appointment. Fill out the form and we’ll
          promptly assist you and confirm your visit with our healthcare professionals.
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin" /></a>
          <a href="#"><i className="fab fa-x-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-facebook" /></a>
        </div>

        <div className="contact-details">
          <div className="contact-box">
            <h4><CiLocationOn size={20} style={{ strokeWidth: 2 }} /> Address</h4>
            <a
              href="https://www.google.com/maps?q=234+Ikeja+Lagos+state+Nigeria"
              target="_blank"
              rel="noopener noreferrer">
              234, Ikeja Lagos state, Nigeria
            </a>
          </div>

          <div className="contact-box">
            <h4><FiPhone size={20} style={{ strokeWidth: 2 }} /> Call us</h4>
            <a href="tel:+23481000000000">+23481000000000</a>
          </div>

          <div className="contact-box">
            <h4><CiMail size={20} style={{ strokeWidth: 2 }} /> Send us a mail</h4>
            <a href="mailto:info@medvanceng.com">info@medvanceng.com</a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>You can reach us any time.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="firstName">First Name <span>*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div>
              <label htmlFor="email">Email Address <span>*</span></label> 
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>

            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="message">Message <span>*</span></label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={formValues.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
