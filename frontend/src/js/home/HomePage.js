import React, { useState } from 'react';
import MovieCard from "../components/MovieCard";
import '../../css/init.css';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    { titulo: "Harry Potter y la piedra filosofal", 
    descripcion: "Un joven mago descubre su destino.", 
    imagen: "/img/peliculas/harry_potter.jpg" },

    { titulo: "El Señor de los Anillos: La Comunidad del Anillo", 
    descripcion: "Un hobbit y sus amigos luchan por destruir el Anillo Único.", 
    imagen: "/img/peliculas/lotr.jpg" },

    { titulo: "Avengers: Endgame",
    descripcion: "Los Vengadores intentan revertir los efectos del chasquido de Thanos.", 
    imagen: "/img/peliculas/avengers_endgame.jpg" },

    { titulo: "Inception", 
    descripcion: "Un ladrón especializado en robar secretos mediante sueños es ofrecido una última oportunidad.", 
    imagen: "/img/peliculas/inception.jpg" },


    { titulo: "Interstellar", 
    descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.", 
    imagen: "/img/peliculas/interstellar.jpg" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  return (
    <div className="home-page">
      <div className="banner">
        <h1 className="home-title">Bienvenido a MovieFlix</h1>
        <p className="home-description">La mejor plataforma para ver películas y series en línea.</p>
<br></br>
<br></br>
        <div className="movie-carousel">
          <div className="movie-cards" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {movies.map((movie, index) => (
              <div className="carousel-item" key={index}>
                <MovieCard 
                  titulo={movie.titulo} 
                  descripcion={movie.descripcion} 
                  imagen={movie.imagen} 
                />
              </div>
              
            ))}
          </div>
          <div className="carousel-controls-side">
          <button className="prev" onClick={prevSlide}>‹</button>
          <button className="next" onClick={nextSlide}>›</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
