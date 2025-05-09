import React, { useEffect, useState } from "react";
import "../../css/series.css"; // Reutiliza estilos de series

function Movies() {
  const [peliculas, setPeliculas] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchLocal = fetch("http://localhost/cineflix/backend/php/movies.php", {
      credentials: "include",
    }).then((res) => res.json());

    const peliculasAPI = [
      {
        id: 439079,
        code: 439079,
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "monja.jpg", 
      },
    ];

    Promise.all([fetchLocal])
      .then(([localData]) => {
        const combinadas = [];

        if (localData.loggedIn && Array.isArray(localData.movies)) {
          combinadas.push(...localData.movies);
        }

        combinadas.push(...peliculasAPI);
        setPeliculas(combinadas);
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
            key={pelicula.id || pelicula.code || index}
            className="serie"
            onClick={() => abrirModal(pelicula)}
          >
            <Link to={`/movies/${pelicula.id}`}>
              <img
                src={`/img/peliculas/${pelicula.imagen}`}
                alt={pelicula.titulo}
                className="serie-imagen"
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
              src={`/img/peliculas/${modalData.imagen}`}
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
