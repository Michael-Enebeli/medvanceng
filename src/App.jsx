// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/components/Navbar";
import Sidebar from "./global/components/Sidebar";
import ScrollToTop from "./utils/ScrollToTop";
import Routing from './config/Routes';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Routes>
        {Routing.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
