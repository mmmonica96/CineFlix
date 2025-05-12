import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/movies.css";

const API_KEY = "3945fb63d0ad0dd349bbc6ecfc03fd15";

function MovieDetails() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [comentarios, setComentarios] = useState("");
  const [comentariosList, setComentariosList] = useState([]);

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
  const handleComentario = () => {
    //check if there is any comment typed
    if (comentarios) {
      setComentariosList([...comentariosList, comentarios]);
      setComentarios("");
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
          <div>
            <h3>Comentarios:</h3>
            <textarea
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              placeholder="Deja tu comentario..."
            ></textarea>
            <button onClick={handleComentario}>Comentar</button>
            <div className="comentarios-list">
              {comentariosList.map((comentario, index) => (
                <p key={index}>{comentario}</p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
}

export default MovieDetails;
