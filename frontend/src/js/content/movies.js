import React, { useEffect, useState } from "react";
import "../../css/movies.css";

function Movies() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const datosPeliculas = [
      {
        id: 439079,
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "/img/peliculas/monja.jpg",
      },
      {
        id: 13,
        titulo: "Forrest Gump",
        descripcion: "A man with a low IQ narrates his life.",
        imagen: "img/peliculas/forrestGump.jpg",
      },
      {
        id: 278,
        titulo: "Cadena perpetua",
        descripcion: "A banker is wrongly convicted.",
        imagen: "img/peliculas/cadenaPerpetua.jpg",
      },
      {
        id: 597,
        titulo: "Titanic",
        descripcion: "A tragic romance aboard a legendary ship.",
        imagen: "img/peliculas/titanic.jpg",
      },
      {
        id: 424,
        titulo: "La lista de Schindler",
        descripcion: "A businessman saves Jews during WWII.",
        imagen: "img/peliculas/lista.jpg",
      },
      {
        id: 85,
        titulo: "Indiana Jones",
        descripcion: "An archaeologist goes on extraordinary adventures.",
        imagen: "img/peliculas/indianaJones.jpg",
      },
      {
        id: 8844,
        titulo: "Jumanji",
        descripcion: "A magical game comes to life.",
        imagen: "img/peliculas/jumanji.png",
      },
      {
        id: 22,
        titulo: "Piratas del Caribe",
        descripcion: "A pirate seeks treasure and freedom.",
        imagen: "img/peliculas/piratas.jpg",
      },
      {
        id: 88751,
        titulo: "Viaje al centro de la Tierra",
        descripcion: "An expedition explores a subterranean world.",
        imagen: "img/peliculas/viaje.jpg",
      },
      {
        id: 372058,
        titulo: "Your Name",
        descripcion: "Two teenagers swap bodies.",
        imagen: "img/peliculas/yourName.png",
      },
      {
        id: 129,
        titulo: "El viaje de Chihiro",
        descripcion: "A girl enters a spiritual world.",
        imagen: "img/peliculas/viaje.jpg",
      },
      {
        id: 149,
        titulo: "Akira",
        descripcion: "A young man gains devastating powers.",
        imagen: "img/peliculas/akira.jpg",
      },
      {
        id: 274870,
        titulo: "Naruto: La Película",
        descripcion: "Ninjas face a new threat.",
        imagen: "img/peliculas/naruto.jpg",
      },
    ];

    setPeliculas(datosPeliculas);
  }, []);

  return (
    <>
      <div className="peliculas-container">
        {peliculas.map((pelicula, index) => (
          <div key={index} className="pelicula">
            <a
              href={`/movies/${pelicula.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pelicula.imagen}
                alt={pelicula.titulo}
                className="pelicula-imagen"
                onError={(e) => (e.target.src = "img/default.jpg")}
              />
            </a>
            <h3>{pelicula.titulo}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;
