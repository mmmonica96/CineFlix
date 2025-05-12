import React, { useEffect, useState } from "react";
import "../../css/series.css";

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const seriesData = [
      {
        id: 1,
        titulo: "Outlander",
        descripcion:
          "Una enfermera viaja en el tiempo a la Escocia del siglo XVIII.",
        imagen: "../img/series/outlander.png",
      },
      {
        id: 2,
        titulo: "13 Reasons Why",
        descripcion: "Una chica deja pistas tras su suicidio.",
        imagen: "../img/series/treceRazones.jpg",
      },
      {
        id: 3,
        titulo: "Stranger Things",
        descripcion: "Niños enfrentan criaturas sobrenaturales.",
        imagen: "../img/series/strange.jpg",
      },
      {
        id: 4,
        titulo: "Dark",
        descripcion: "Viajes en el tiempo en un pueblo alemán.",
        imagen: "../img/series/dark.jpg",
      },
      {
        id: 5,
        titulo: "The Mandalorian",
        descripcion: "Un cazarrecompensas en el universo Star Wars.",
        imagen: "../img/series/mandalorian.jpg",
      },
      {
        id: 6,
        titulo: "Black Mirror",
        descripcion: "Relatos distópicos sobre la tecnología.",
        imagen: "../img/series/black_mirror.jpg",
      },
      {
        id: 7,
        titulo: "24",
        descripcion: "Un agente debe salvar al país en 24 horas.",
        imagen: "../img/series/24.jpg",
      },
      {
        id: 8,
        titulo: "Vikingos",
        descripcion: "Historias épicas de guerreros nórdicos.",
        imagen: "../img/series/vikings.jpg",
      },
      {
        id: 9,
        titulo: "Jack Ryan",
        descripcion: "Un analista de la CIA se convierte en agente.",
        imagen: "../img/series/jack_ryan.jpg",
      },
      {
        id: 10,
        titulo: "Daredevil",
        descripcion: "Un abogado ciego lucha contra el crimen.",
        imagen: "../img/series/daredevil.jpg",
      },
      {
        id: 11,
        titulo: "The Haunting of Hill House",
        descripcion: "Una familia es perseguida por su pasado.",
        imagen: "../img/series/hill_house.jpg",
      },
      {
        id: 12,
        titulo: "Marianne",
        descripcion: "Una escritora enfrenta a su propio demonio.",
        imagen: "../img/series/marianne.jpg",
      },
      {
        id: 13,
        titulo: "American Horror Story",
        descripcion: "Temporadas antológicas de terror.",
        imagen: "../img/series/ahs.jpg",
      },
      {
        id: 14,
        titulo: "Penny Dreadful",
        descripcion: "Monstruos clásicos se reúnen en Londres.",
        imagen: "../img/series/penny_dreadful.jpg",
      },
      {
        id: 15,
        titulo: "Breaking Bad",
        descripcion: "Un profesor se convierte en narcotraficante.",
        imagen: "../img/series/breaking_bad.jpg",
      },
    ];

    setSeries(seriesData);
  }, []);

  return (
    <div className="series-container">
      {series.map((serie) => (
        <div key={serie.id} className="serie">
          <a
            href={`/series/${serie.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={serie.imagen}
              alt={serie.titulo}
              className="serie-imagen"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Series;
