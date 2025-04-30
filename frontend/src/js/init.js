import React from 'react';
import '../css/init.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieCard from './components/MovieCard';

function Init() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <div className="movie-grid">
        <MovieCard titulo="Título" descripcion="Descripción" />
        <MovieCard titulo="Título" descripcion="Descripción" />
      </div>
    </div>

  );
}

export default Init;
