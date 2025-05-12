import React, { useEffect, useState } from "react";
import "../../css/movies.css";

const API_KEY = "3945fb63d0ad0dd349bbc6ecfc03fd15";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

function Movies() {
  const [peliculas, setPeliculas] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    //fetch
    const fetchLocal = fetch(
      "http://localhost/cineflix/backend/php/movies.php",
      {
        credentials: "include",
      }
    ).then((res) => res.json());

    //json
    const fetchAPI = fetch(API_URL).then((res) => res.json());

    Promise.all([fetchLocal, fetchAPI])
      .then(([localData, apiData]) => {
        const combinadas = [];

        if (localData.loggedIn && Array.isArray(localData.movies)) {
          combinadas.push(...localData.movies);
        }

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
      })
      .catch((error) => {
        console.error("Error al cargar películas:", error);
        setPeliculas([]);
      });
  }, []);

  const abrirModal = (pelicula) => {
    setModalData(pelicula);
  };

  const cerrarModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="series-container">
        {peliculas.map((pelicula, index) => (
          <div
            key={pelicula.id || index}
            className="serie"
            onClick={() => abrirModal(pelicula)}
          >
            <img
              src={
                pelicula.imagen.startsWith("http")
                  ? pelicula.imagen
                  : `/img/peliculas/${pelicula.imagen}`
              }
              alt={pelicula.titulo}
              className="serie-imagen"
            />
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
