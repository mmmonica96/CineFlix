import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/content.css";

function Content() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const peliculasData = [
      {
        id: 1,
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "../img/peliculas/monja.jpg",
      },
    ];

    //update status with movies
    setPeliculas(peliculasData);
  }, []);

  return (
    <div className="peliculas-container">
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} className="pelicula">
          <Link to={`/movie/${pelicula.id}`}>
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

export default Content;
