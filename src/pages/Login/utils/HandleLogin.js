// utils/HandleLogin.js
import { showSuccess, showError } from '@/utils/Toast';

const HandleLogin = async (navigate) => {
  const email = sessionStorage.getItem('email');
  const password = sessionStorage.getItem('password');
  const rememberMe = sessionStorage.getItem('rememberMe') === 'true';

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      showSuccess('Login successful!');
      const data = await response.json();
      const token = data.token;

      sessionStorage.clear();

      if (rememberMe) {
        localStorage.setItem('authToken', token);
      } else {
        sessionStorage.setItem('authToken', token);
      }

      navigate('/dashboard', { replace: true });
    } else {
      const error = await response.json();
      showError(error.message);
    }
  } catch (error) {
    showError('An error occurred. Please try again later.');
  }
};

export default HandleLogin;