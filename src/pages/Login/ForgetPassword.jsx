// forget-password.jsx
import ForgotPasswordForm from './components/ForgetPasswordForm';
import HideNav from "../../utils/HideNav";

const ForgotPassword = () => {
  return (
    <div>
      <HideNav />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;