import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/movies.css";

function Movies() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const peliculasData = [
      {
        id: 439079,
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "../img/peliculas/monja.jpg",
      },
    ];

    //update the state with the fetched data
    setPeliculas(peliculasData);
  }, []);

  return (
    <div className="peliculas-container">
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} className="pelicula">
          <Link to={`/movies/${pelicula.id}`}>
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              className="pelicula-imagen"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
