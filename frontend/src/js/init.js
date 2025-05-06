import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./register/RegisterForm";
import HomePage from './home/HomePage'; // Importamos la página de inicio


function Init() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />

        <Routes>
        <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Init;
