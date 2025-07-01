// handleVerification.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/Toast'; 

export function useVerifyButton(inputRefs) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const checkIfButtonShouldBeEnabled = () => {
    const otp = inputRefs.current.map((input) => input.value).join('');
    setIsButtonEnabled(otp.length === 6);
  };

  const handleSubmit = async (e, email, setStatus) => {
    

    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Verifying...', 'loading'); 

    const otp = inputRefs.current.map((input) => input.value).join('');

    try {
      const res = await fetch('/api/auth/verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  email, otp }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok) {
        const { token } = data;
        showSuccess('Verification Successful');
        localStorage.setItem('authToken', token);
        setStatus('Verified! Redirecting...', 'success');
        sessionStorage.clear();
        navigate('/dashboard', { replace: true });
      } else {
        setStatus(data.message || 'Something went wrong.', 'error');
        showError(data.message);
      }
    } catch (err) {
      setIsSubmitting(false);
      showError('Network error');
      setStatus('Network error', 'error');
    }
  };

  return {
    isButtonEnabled,
    isSubmitting,
    checkIfButtonShouldBeEnabled,
    handleSubmit
  };
}

let hasRedirected = false;

export function useStoredEmailOrRedirect(setEmail) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('pending');
    if (!storedEmail && !hasRedirected) {
      hasRedirected = true;
      showError('An error occurred, Please sign up');
      setTimeout(() => {
        navigate('/signup', { replace: true });
      }, 500000000);
    } else {
      setEmail(storedEmail);
    }
  }, [navigate, setEmail]);
}


export function handleOTPInput(e, idx, refs, checkIfButtonShouldBeEnabled) {
  const value = e.target.value.replace(/[^0-9]/g, '');
  e.target.value = value;
  checkIfButtonShouldBeEnabled();
  if (value && idx < refs.length - 1) {
    refs[idx + 1].focus();
  }
}

export function handleOTPPaste(e, refs, checkIfButtonShouldBeEnabled) {
  e.preventDefault();
  const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
  paste.split('').forEach((digit, i) => {
    if (i < refs.length) {
      refs[i].value = digit;
    }
  });
  checkIfButtonShouldBeEnabled();
  if (refs[paste.length - 1]) {
    refs[paste.length - 1].focus();
  }
}
