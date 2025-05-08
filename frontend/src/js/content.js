import React, { useEffect } from "react";
import "../css/content.css";

function Content() {
  useEffect(() => {
    // Array of movies with title, description, and image path
    const peliculas = [
      {
        titulo: "La Monja",
        descripcion: "A demonic entity attacks a convent.",
        imagen: "../img/peliculas/monja.jpg",
      },
      {
        titulo: "Forrest Gump",
        descripcion: "A man with a low IQ narrates his life.",
        imagen: "../img/peliculas/forrestGump.jpg",
      },
      {
        titulo: "Cadena perpetua",
        descripcion: "A banker is wrongly convicted.",
        imagen: "../img/peliculas/cadenaPerpetua.jpg",
      },
      {
        titulo: "Titanic",
        descripcion: "A tragic romance aboard a legendary ship.",
        imagen: "../img/peliculas/titanic.jpg",
      },
      {
        titulo: "La lista de Schindler",
        descripcion: "A businessman saves Jews during WWII.",
        imagen: "../img/peliculas/lista.jpg",
      },
      {
        titulo: "Indiana Jones",
        descripcion: "An archaeologist goes on extraordinary adventures.",
        imagen: "../img/peliculas/indianaJones.jpg",
      },
      {
        titulo: "Jumanji",
        descripcion: "A magical game comes to life.",
        imagen: "../img/peliculas/jumanji.png",
      },
      {
        titulo: "Piratas del Caribe",
        descripcion: "A pirate seeks treasure and freedom.",
        imagen: "../img/peliculas/piratas.jpg",
      },
      {
        titulo: "Viaje al centro de la Tierra",
        descripcion: "An expedition explores a subterranean world.",
        imagen: "../img/peliculas/viaje.jpg",
      },
      {
        titulo: "Your Name",
        descripcion: "Two teenagers swap bodies.",
        imagen: "../img/peliculas/yourName.png",
      },
      {
        titulo: "El viaje de Chihiro",
        descripcion: "A girl enters a spiritual world.",
        imagen: "../img/peliculas/chiro.jpg",
      },
      {
        titulo: "Akira",
        descripcion: "A young man gains devastating powers.",
        imagen: "../img/peliculas/akira.jpg",
      },
      {
        titulo: "Naruto: La Película",
        descripcion: "Ninjas face a new threat.",
        imagen: "../img/peliculas/naruto.jpg",
      },
    ];

    // Create container for movies
    const contenedor = document.createElement("div");
    contenedor.classList.add("peliculas-container");
    document.body.appendChild(contenedor);

    // Create the modal for showing movie details
    const modal = crearModal();
    document.body.appendChild(modal);

    // Function to create modal
    function crearModal() {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const closeBtn = document.createElement("span");
      closeBtn.classList.add("cerrar");
      closeBtn.innerHTML = "&times;";

      const modalTitle = document.createElement("h2");
      const modalDescription = document.createElement("p");
      const modalImage = document.createElement("img");
      modalImage.classList.add("modal-imagen");

      modalContent.appendChild(closeBtn);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(modalImage);
      modalContent.appendChild(modalDescription);
      modal.appendChild(modalContent);

      // Close modal when the close button is clicked
      closeBtn.onclick = () => {
        modal.style.display = "none";
      };

      // Close modal if clicked outside of the modal
      window.onclick = (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      };

      return modal;
    }

    // Function to create and add movie cards to the container
    function crearTarjeta(pelicula) {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("pelicula");

      const imagen = document.createElement("img");
      imagen.src = pelicula.imagen; // Image path
      imagen.alt = pelicula.titulo;
      imagen.classList.add("pelicula-imagen");

      const titulo = document.createElement("h3");
      titulo.textContent = pelicula.titulo;

      // Open modal with movie details when the card is clicked
      tarjeta.onclick = () => {
        mostrarDetalles(pelicula);
      };

      tarjeta.appendChild(imagen);
      tarjeta.appendChild(titulo);

      contenedor.appendChild(tarjeta);
    }

    // Function to show movie details in the modal
    function mostrarDetalles(pelicula) {
      const modal = document.querySelector(".modal");
      const modalTitle = modal.querySelector("h2");
      const modalDescription = modal.querySelector("p");
      const modalImage = modal.querySelector(".modal-imagen");

      modalTitle.textContent = pelicula.titulo;
      modalDescription.textContent = pelicula.descripcion;
      modalImage.src = pelicula.imagen;

      modal.style.display = "block"; // Display modal
    }

    // Create movie cards for all movies
    peliculas.forEach((pelicula) => {
      crearTarjeta(pelicula);
    });

    // Cleanup on unmount
    return () => {
      document.body.removeChild(contenedor);
      document.body.removeChild(modal);
    };
  }, []);

  return null;
}

export default Content;
