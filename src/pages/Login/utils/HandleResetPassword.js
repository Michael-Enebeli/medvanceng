import { useState } from 'react';
import { showSuccess, showError } from '@/utils/Toast';

const useResetPassword = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [tokenError, setTokenError] = useState('');
  const [status, setStatus] = useState('');
  const [className, setClassName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (!token) {
      setTokenError('Token is required');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      if (res.ok) {
        setStatus('Password reset successful. You can now log in.');
        setClassName('success');
        setPassword('');
        setConfirmPassword('');
        setToken('');
        showSuccess('Password reset successful.');
      } else {
        const data = await res.json();
        setStatus(data.message || 'Reset failed.');
        setClassName('error');
        showError(data.message);
      }
    } catch (err) {
      setStatus('Error sending request.');
      setClassName('error');
      showError('Error sending request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
    setTokenError,
    status,
    className,
    isSubmitting,
    handleReset,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  };
};

export default useResetPassword;