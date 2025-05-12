import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./register/RegisterForm";
import HomePage from "./home/HomePage"; // Importamos la página de inicio
import ContactForm from "./Contact/ContactForm";
import FAQ from "./FAQ";
import PreferencesPage from "./preferences/preferencias";
import ConfigurationSideBar from "./components/configurationSideBar";
<<<<<<< HEAD
=======
import Series from "./content/series";
>>>>>>> origin/monica
import Movies from "./content/movies";
import MovieDetails from "./content/movieDetails";
import SeriesDetails from "./content/seriesDetails";


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
<<<<<<< HEAD
          <Route path="/movieDetails" element={<MovieDetails />} />
=======
          <Route path="/series" element={<Series />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
>>>>>>> origin/monica
        </Routes>
      </div>
    </Router>
  );
}

export default Init;
