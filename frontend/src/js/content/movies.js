import React, { useEffect, useState } from "react";
import "../../css/series.css"; // Mantiene estilos compartidos

function Movies() {
  const [peliculas, setPeliculas] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/cineflix/backend/php/movies.php", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn && Array.isArray(data.movies)) {
          setPeliculas(data.movies);
        } else {
          setPeliculas([]);
        }
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
        {peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="serie"
            onClick={() => abrirModal(pelicula)}
          >
            <img
              src={`/img/peliculas/${pelicula.imagen}`}
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
