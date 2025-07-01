// ./config/Routing.js
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import ForgetPassword from "../pages/Login/ForgetPassword";
import ResetPassword from "../pages/Login/ResetPassword";
import SignUp from "../pages/SignUp/SignUp";
import Verification from "../pages/SignUp/Verification";
import NotFound from "../pages/NotFound/NotFound";

const Routing = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/pharmacy", element: Pharmacy },
  { path: "/contact", element: Contact },
  { path: "/login", element: Login },
  { path: "/password/forget", element: ForgetPassword },
  { path: "/password/reset", element: ResetPassword },
  { path: "/signup", element: SignUp },
  { path: "/signup/Verification", element: Verification },
  { path: "*", element: NotFound },
];

export default Routing;
