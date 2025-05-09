import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el ID de la serie desde la URL
import "../../css/series.css"; // Se mantiene el mismo CSS

function SerieDetails() {
  const { id } = useParams(); // Obtener el ID de la serie de la URL
  const [serie, setSerie] = useState(null); // Almacenar los datos de la serie
  const [comentario, setComentario] = useState(""); // Para almacenar los comentarios

  useEffect(() => {
    // Aquí usamos el id de la serie para obtener sus datos
    const seriesData = [
      {
        id: 1,
        titulo: "Outlander",
        descripcion:
          "Una enfermera viaja en el tiempo a la Escocia del siglo XVIII.",
        imagen: "../img/series/outlander.jpg",
      },
      {
        id: 2,
        titulo: "13 Reasons Why",
        descripcion: "Una chica deja pistas tras su suicidio.",
        imagen: "../img/series/13reasons.jpg",
      },
      // Añadir las otras series aquí...
    ];

    // Buscar la serie por el ID
    const serieSeleccionada = seriesData.find(
      (serie) => serie.id === parseInt(id)
    );
    setSerie(serieSeleccionada);
  }, [id]);

  if (!serie) return <div>Cargando...</div>;

  return (
    <div className="serie-details">
      <h1>{serie.titulo}</h1>
      <img src={serie.imagen} alt={serie.titulo} className="serie-imagen" />
      <p>{serie.descripcion}</p>

      <div className="comentary-container">
        <textarea
          placeholder="Deja un comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button onClick={() => alert(`Comentario enviado: ${comentario}`)}>
          Enviar comentario
        </button>
      </div>
    </div>
  );
}

export default SerieDetails;
