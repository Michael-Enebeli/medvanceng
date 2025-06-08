import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/components/Navbar";
import Sidebar from "./global/components/Sidebar";

import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CreateAccount from './pages//SignUp/components/CreateAccount';
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/signup/create_account" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
