import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/Toast'; 

const resendOtp = async (email, setIsSubmitting) => {
  setIsSubmitting(true);
  try {
    const response = await fetch('/api/auth/resendOtp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      showSuccess(data.message);
    } else {
      showError(data.message);
    }
  } catch (error) {
    showError('Error resending OTP');
  } finally {
    setIsSubmitting(false);
  }
};

export const useResendOtp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); 

  const handleResendOtp = async () => {
    const storedEmail = sessionStorage.getItem('pending');
    if (!storedEmail) {
      showError('An error occurred, Please sign up');
      navigate('/signup', { replace: true });
      return;
    }

    await resendOtp(storedEmail, setIsSubmitting);
  };

  return { isSubmitting, handleResendOtp };
};
