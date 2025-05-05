import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Router, Routes y Route
import "../css/init.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./register/RegisterForm";

function Init() {
  return (
    <Router>
      {" "}
      {/* Envolvemos toda la app en Router */}
      <div className="App">
        <Banner />
        <Navbar />
<<<<<<< HEAD
        <Routes>
          {" "}
          {/* Definimos las rutas */}
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
          <Route path="/" element={<Init />} />{" "}
          {/* Ruta para el formulario de inicio */}
          <Route path="/login" element={<LoginForm />} />{" "}
          {/* Ruta para el formulario de login */}
=======
        <Routes> {/* Definimos las rutas */}
          <Route path="/" element={<div className="movie-grid">
            <MovieCard titulo="Título" descripcion="Descripción" />
            <MovieCard titulo="Título" descripcion="Descripción" />
          </div>} />

          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/" element={<Init />} /> {/* Ruta para el formulario de inicio */}
          <Route path="/login" element={<LoginForm />} /> {/* Ruta para el formulario de login */}

>>>>>>> origin/carmen
        </Routes>
      </div>
    </Router>
  );
}

export default Init;
