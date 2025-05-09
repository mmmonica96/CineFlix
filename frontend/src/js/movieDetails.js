import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/content.css";

function MovieDetails() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [comentarios, setComentarios] = useState("");

  useEffect(() => {
    //api
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
      .then((res) => res.json())
      .then((data) => setPelicula(data))
      .catch((err) =>
        console.error("Error al obtener los detalles de la película:", err)
      );
  }, [id]);

  if (!pelicula) return <div>Cargando...</div>;

  return (
    <div className="movie-details">
      <h1>{pelicula.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}
      />
      <p>{pelicula.overview}</p>

      <div className="comentarios-container">
        <textarea
          placeholder="Deja un comentario..."
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
        <button onClick={() => alert(`Comentario enviado: ${comentarios}`)}>
          Enviar comentario
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
