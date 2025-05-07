
import React from 'react';
import '../../css/MovieCard.css';


function MovieCard({ titulo, descripcion, imagen }) {
  return (
    <div className="movie-card">
      <h3>{titulo}</h3>
      <img src={imagen} alt={titulo} className="movie-img" />
      <p>{descripcion}</p>
      <button className="comentarios-btn">Comentarios</button>
    </div>
  );
}

export default MovieCard;

