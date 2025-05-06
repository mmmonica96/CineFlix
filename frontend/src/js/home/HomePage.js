import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from "../components/MovieCard";
import '../../css/init.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="banner">
        <h1 className="home-title">Bienvenido a MovieFlix</h1>
        <p className="home-description">La mejor plataforma para ver películas y series en línea.</p>
       <div className="movie-grid">
                       <MovieCard titulo="Título" descripcion="Descripción" />
                       <MovieCard titulo="Título" descripcion="Descripción" />
                     </div>
        <div className="home-buttons">
        </div>
      </div>
    </div>
  );
}

export default HomePage;
