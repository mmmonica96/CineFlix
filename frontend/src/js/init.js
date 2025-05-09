import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./register/RegisterForm";
import HomePage from "./home/HomePage";
import ContactForm from "./Contact/ContactForm";
import FAQ from "./FAQ";
import PreferencesPage from "./preferences/preferencias";
import ConfigurationSideBar from "./components/configurationSideBar";
import Series from "./content/series";
import Movies from "./content/movies";
import MovieDetails from "./content/movieDetails";

function Init() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />
        <ConfigurationSideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Init;
