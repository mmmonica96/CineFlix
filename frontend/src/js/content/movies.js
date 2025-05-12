import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/movies.css";

function Movies() {
  const [peliculas, setPeliculas] = useState([]);
  const [modalData, setModalData] = useState(null); // agregado para el modal

  const API_KEY = "TU_API_KEY"; // reemplaza con tu API key real
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

  useEffect(() => {
    const fetchLocal = fetch("http://localhost/cineflix/backend/php/movies.php").then((res) =>
      res.json()
    );

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

    const fetchAPI = fetch(API_URL).then((res) => res.json());

    Promise.all([fetchLocal, fetchAPI])
      .then(([localData, apiData]) => {
        const combinadas = [...datosPeliculas];

        if (localData.loggedIn && Array.isArray(localData.movies)) {
          combinadas.push(...localData.movies);
        }

        if (Array.isArray(apiData.results)) {
          const peliculasAPI = apiData.results.slice(0, 5).map((p) => ({
            id: p.id,
            titulo: p.title,
            descripcion: p.overview,
            imagen: `https://image.tmdb.org/t/p/w500${p.poster_path}`,
          }));
          combinadas.push(...peliculasAPI);
        }

        fetch(
          `https://api.themoviedb.org/3/movie/439292?api_key=${API_KEY}&language=es-ES`
        )
          .then((res) => res.json())
          .then((data) => {
            combinadas.push({
              id: data.id,
              titulo: data.title,
              descripcion: data.overview,
              imagen: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            });
            setPeliculas(combinadas);
          });
      })
      .catch((error) => {
        console.error("Error al cargar películas:", error);
        setPeliculas(datosPeliculas);
      });
  }, []);

  const abrirModal = (pelicula) => setModalData(pelicula);
  const cerrarModal = () => setModalData(null);

  return (
    <>
      <div className="peliculas-container">
        {peliculas.map((pelicula, index) => (
          <div
            key={pelicula.id || index}
            className="pelicula"
            onClick={() => abrirModal(pelicula)}
          >
            <Link to={`/movies/${pelicula.id}`}>
              <img
                src={
                  pelicula.imagen.startsWith("http")
                    ? pelicula.imagen
                    : `/img/peliculas/${pelicula.imagen}`
                }
                alt={pelicula.titulo}
                className="pelicula-imagen"
                onError={(e) => (e.target.src = "img/default.jpg")}
              />
            </Link>
            <h3>{pelicula.titulo}</h3>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={cerrarModal}>
              &times;
            </span>
            <h2>{modalData.titulo}</h2>
            <img
              src={
                modalData.imagen.startsWith("http")
                  ? modalData.imagen
                  : `/img/peliculas/${modalData.imagen}`
              }
              alt={modalData.titulo}
              className="modal-imagen"
            />
            <p id="modal-descripcion">{modalData.descripcion}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
