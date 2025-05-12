import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "../../css/series.css"; // Reutiliza estilos de series
=======
import "../../css/movies.css";
>>>>>>> origin/monica

function Movies() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    const fetchLocal = fetch("http://localhost/cineflix/backend/php/movies.php", {
      credentials: "include",
    }).then((res) => res.json());

    // Simulamos API externa
    const peliculasAPI = [
      {
        code: 439079,
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "monja.jpg", // Imagen ya disponible localmente
      },
    ];

    Promise.all([fetchLocal])
      .then(([localData]) => {
=======
    //fetch
    const fetchLocal = fetch(
      "http://localhost/cineflix/backend/php/movies.php",
=======
    const datosPeliculas = [
>>>>>>> origin/monica
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

<<<<<<< HEAD
    //json
    const fetchAPI = fetch(API_URL).then((res) => res.json());

    Promise.all([fetchLocal, fetchAPI])
      .then(([localData, apiData]) => {
>>>>>>> origin/monica
        const combinadas = [];

        if (localData.loggedIn && Array.isArray(localData.movies)) {
          combinadas.push(...localData.movies);
        }

<<<<<<< HEAD
        combinadas.push(...peliculasAPI); // Mezcla datos locales y API
        setPeliculas(combinadas);
=======
        if (Array.isArray(apiData.results)) {
          const apiPeliculas = apiData.results.slice(0, 5).map((p) => ({
            id: p.id,
            titulo: p.title,
            descripcion: p.overview,
            imagen: `https://image.tmdb.org/t/p/w500${p.poster_path}`,
          }));
          combinadas.push(...apiPeliculas);
        }

        //api
        const fetchLaMonja = fetch(
          `https://api.themoviedb.org/3/movie/439292?api_key=${API_KEY}&language=es-ES`
        )
          .then((res) => res.json())
          .then((data) => ({
            id: data.id,
            titulo: data.title,
            descripcion: data.overview,
            imagen: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          }));

        fetchLaMonja.then((laMonja) => {
          combinadas.push(laMonja);
          setPeliculas(combinadas);
        });
>>>>>>> origin/monica
      })
      .catch((error) => {
        console.error("Error al cargar películas:", error);
        setPeliculas([]);
      });
=======
    setPeliculas(datosPeliculas);
>>>>>>> origin/monica
  }, []);

  return (
    <>
      <div className="peliculas-container">
        {peliculas.map((pelicula, index) => (
<<<<<<< HEAD
          <div
<<<<<<< HEAD
            key={pelicula.id || pelicula.code || index}
=======
            key={pelicula.id || index}
>>>>>>> origin/monica
            className="serie"
            onClick={() => abrirModal(pelicula)}
          >
            <img
<<<<<<< HEAD
              src={`/img/peliculas/${pelicula.imagen}`}
=======
              src={
                pelicula.imagen.startsWith("http")
                  ? pelicula.imagen
                  : `/img/peliculas/${pelicula.imagen}`
              }
>>>>>>> origin/monica
              alt={pelicula.titulo}
              className="serie-imagen"
            />
=======
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
>>>>>>> origin/monica
            <h3>{pelicula.titulo}</h3>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      {modalData && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={cerrarModal}>
              &times;
            </span>
            <h2>{modalData.titulo}</h2>
            <img
<<<<<<< HEAD
              src={`/img/peliculas/${modalData.imagen}`}
=======
              src={
                modalData.imagen.startsWith("http")
                  ? modalData.imagen
                  : `/img/peliculas/${modalData.imagen}`
              }
>>>>>>> origin/monica
              alt={modalData.titulo}
              className="modal-imagen"
            />
            <p id="modal-descripcion">{modalData.descripcion}</p>
          </div>
        </div>
      )}
=======
>>>>>>> origin/monica
    </>
  );
}

export default Movies;
