
import React from 'react';
import '../../css/MovieCard.css';


export default function MovieCard({ titulo, descripcion }) {
  return (
    <div className="movie-card">
      <h3>{titulo}</h3>
      <div className="movie-img" />
      <p>{descripcion}</p>
      <p className="comentarios">Comentarios</p>
    </div>
  );
}
