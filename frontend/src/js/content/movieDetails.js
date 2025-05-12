import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/movies.css";

const API_KEY = "3945fb63d0ad0dd349bbc6ecfc03fd15";

function MovieDetails() {
   const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState("");

  useEffect(() => {
    // Fetch de los detalles de la película
    const fetchPelicula = fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setPelicula(data))
      .catch((error) => console.error("Error al cargar película:", error));
  }, [id]);

  //function to handle the comment submission
  const handleEnviarComentario = () => {
    if (nuevoComentario.trim()) {
      setComentarios((prev) => [...prev, nuevoComentario.trim()]);
      setNuevoComentario("");
    }
  };

  return (
    <div className="movie-details-container">
      {pelicula ? (
        <>
          <h1>{pelicula.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
            className="movie-detail-image"
          />
          <p>{pelicula.overview}</p>
          <div className="comentarios-container">
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe un comentario..."
        />
        <button onClick={handleEnviarComentario}>Enviar</button>
        <ul>
          {comentarios.map((coment, index) => (
            <li key={index}>{coment}</li>
          ))}
        </ul>
      </div>
        </>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
}

export default MovieDetails;
