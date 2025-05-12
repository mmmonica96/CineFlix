import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  //is
  const { id } = useParams();

  //we define the state for storing movie data, comments and error
  const [pelicula, setPelicula] = useState(null);
  const [comentarios, setComentarios] = useState("");
  const [error, setError] = useState(null);

  //effect to be executed when the id parameter changes
  useEffect(() => {
    const apiKey = "83ec875af374dd17a49d64b0cb8ce88c";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`;

    //request to API
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPelicula(data))
      .catch((err) => {
        //if an error occurs, we handle it
        console.error("Error al obtener la película:", err);
        setError("Error al obtener la información de la película");
      });
  }, [id]);

  //if  there is an error, we display the error message
  if (error) return <div>{error}</div>;

  //if we have not yet loaded the movie data, we display a loading message.
  if (!pelicula) return <div>Cargando...</div>;

  //url
  const posterUrl = pelicula.poster_path
    ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
    : "https://via.placeholder.com/500x750?text=Imagen+no+disponible";

  return (
    <div className="movie-details">
      {/*title*/}
      <h1>{pelicula.title}</h1>

      {/* image*/}
      <img src={posterUrl} alt={pelicula.title} />

      {/*description */}
      <p>{pelicula.overview}</p>

      <div className="comentarios-container">
        <textarea
          placeholder="Deja un comentario..."
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />

        <button onClick={() => alert(`Comentario enviado: ${comentarios}`)}>
          Enviar
        </button>
      </div>
    </div>
  );
}

//we export the component to be able to use
//it in other parts of the application
export default MovieDetails;
