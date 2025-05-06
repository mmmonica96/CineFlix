import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/init.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./register/RegisterForm";
import ContactForm from "./Contact/ContactForm";
import FAQ from "./FAQ";

function Init() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div className="movie-grid">
                <MovieCard titulo="Título" descripcion="Descripción" />
                <MovieCard titulo="Título" descripcion="Descripción" />
              </div>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Init;
