// components/resendOtpButton.jsx
import React from 'react';
import { useResendOtp } from '../utils/HandleResendOtp';

export default function ResendOtpButton() {
  const { isSubmitting, handleResendOtp } = useResendOtp();

  return (
    <button
      className="resend-button"
      onClick={handleResendOtp}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Resending...' : 'Resend OTP'}
    </button>
  );
}
