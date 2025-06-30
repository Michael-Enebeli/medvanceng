import { useState } from 'react';
import { showSuccess, showError } from '@/utils/Toast';

const useForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ message: '', className: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      showError('Invalid email address.');
      return;
    }
    setIsSubmitting(true);
    setStatus({ message: 'Sending...', className: 'sending' });
    try {
      const res = await fetch('/api/auth/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus({ message: 'Reset link sent to your email.', className: 'success' });
       showSuccess('Successful');
        setEmail('');
      } else {
        const data = await res.json();
        setStatus({ message: data.message || 'Something went wrong.', className: 'error' });
        showError(data.message);
      }
    } catch (err) {
      setStatus({ message: 'Error sending request.', className: 'error' });
      showError('Oops! Failed to send request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { email, setEmail, status, isSubmitting, handleSubmit };
};

export default useForgetPassword;