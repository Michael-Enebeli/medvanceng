// routes.js
import React from 'react';
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CreateAccount from "../pages/SignUp/components/CreateAccount";
import NotFound from "../pages/NotFound/NotFound";

const Routing = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/pharmacy', element: <Pharmacy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/signup/*', element: <SignUp /> },
  { path: '/signup/create_account', element: <CreateAccount /> },
  { path: '*', element: <NotFound /> },
];

export default Routing;
