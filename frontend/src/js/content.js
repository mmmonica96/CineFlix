import '../css/content.css';

const peliculas = [
    {
      titulo: 'La Monja',
      descripcion: 'Una entidad demoníaca ataca en un convento.',
      imagen: 'img/cr7.jpg'
    },
    {
      titulo: 'Forrest Gump',
      descripcion: 'Un hombre con bajo coeficiente narra su vida.',
      imagen: 'img/forrest_gump.jpg'
    },
    {
      titulo: 'Cadena perpetua',
      descripcion: 'Un banquero es acusado injustamente.',
      imagen: 'img/shawshank.jpg'
    },
    {
      titulo: 'Titanic',
      descripcion: 'Un romance trágico en un barco legendario.',
      imagen: 'img/titanic.jpg'
    },
    {
      titulo: 'La lista de Schindler',
      descripcion: 'Un empresario salva a judíos en la Segunda Guerra.',
      imagen: 'img/schindler.jpg'
    },
    {
      titulo: 'Indiana Jones',
      descripcion: 'Un arqueólogo vive aventuras extraordinarias.',
      imagen: 'img/indiana_jones.jpg'
    },
    {
      titulo: 'Jumanji',
      descripcion: 'Un juego mágico cobra vida.',
      imagen: 'img/jumanji.jpg'
    },
    {
      titulo: 'Piratas del Caribe',
      descripcion: 'Un pirata busca tesoros y libertad.',
      imagen: 'img/pirates.jpg'
    },
    {
      titulo: 'Viaje al centro de la Tierra',
      descripcion: 'Una expedición explora un mundo subterráneo.',
      imagen: 'img/journey_earth.jpg'
    },
    {
      titulo: 'Your Name',
      descripcion: 'Dos adolescentes intercambian cuerpos.',
      imagen: 'img/your_name.jpg'
    },
    {
      titulo: 'El viaje de Chihiro',
      descripcion: 'Una niña entra en el mundo espiritual.',
      imagen: 'img/chihiro.jpg'
    },
    {
      titulo: 'Akira',
      descripcion: 'Un joven adquiere poderes devastadores.',
      imagen: 'img/akira.jpg'
    },
    {
      titulo: 'Naruto: La Película',
      descripcion: 'Ninjas enfrentan una nueva amenaza.',
      imagen: 'img/naruto_movie.jpg'
    }
];
  
  
// Crear contenedor
  const contenedor = document.createElement('div');
  contenedor.className = 'peliculas-container';
  document.body.appendChild(contenedor);
  
// Crear modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="cerrar">&times;</span>
      <h2 id="modal-titulo"></h2>
      <img id="modal-imagen" class="modal-imagen" />
      <p id="modal-descripcion"></p>
    </div>
  `;
document.body.appendChild(modal);
  
// Cerrar modal
  modal.querySelector('.cerrar').onclick = () => modal.style.display = 'none';
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};
  
// Crear tarjetas
  peliculas.forEach(pelicula => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'pelicula';
    tarjeta.innerHTML = `
      <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="pelicula-imagen" />
      <h3>${pelicula.titulo}</h3>
    `;
    tarjeta.onclick = () => {
      document.getElementById('modal-titulo').textContent = pelicula.titulo;
      document.getElementById('modal-descripcion').textContent = pelicula.descripcion;
      document.getElementById('modal-imagen').src = pelicula.imagen;
      modal.style.display = 'block';
    };
    contenedor.appendChild(tarjeta);
});
  