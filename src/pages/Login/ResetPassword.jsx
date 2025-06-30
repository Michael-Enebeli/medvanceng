// reset-password.jsx
import ResetPasswordForm from './components/ResetPasswordForm';
import HideNav from "../../utils/HideNav";

const ResetPassword = () => {
  return (
    <div>
      <HideNav />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;