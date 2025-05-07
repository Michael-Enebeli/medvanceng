import { useState, useEffect } from 'react';

export const useFormHelper = (onSuccess) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  useEffect(() => {
    const savedData = Object.keys(formData).reduce((acc, key) => {
      const value = sessionStorage.getItem(key);
      if (value) acc[key] = value;
      return acc;
    }, {});
    setFormData(prev => ({ ...prev, ...savedData }));
  }, []);

  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });

    setIsFormValid(Object.values(formData).every(value => value.trim() !== ''));
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors({});
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateAndSubmitForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullname.trim())) {
      newErrors.fullname = 'Only letters and spaces allowed';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (onSuccess) onSuccess();
    }
  };

  return {
    formData,
    errors,
    isFormValid,
    showPassword,
    handleChange,
    togglePasswordVisibility,
    validateAndSubmitForm
  };
};
