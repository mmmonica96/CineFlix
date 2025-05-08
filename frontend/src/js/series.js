import '../css/series.css';

const series = [
    {
      titulo: 'Outlander',
      descripcion: 'Una enfermera viaja en el tiempo a la Escocia del siglo XVIII.',
      imagen: 'img/outlander.jpg'
    },
    {
      titulo: '13 Reasons Why',
      descripcion: 'Una chica deja pistas tras su suicidio.',
      imagen: 'img/13reasons.jpg'
    },
    {
      titulo: 'Stranger Things',
      descripcion: 'Niños enfrentan criaturas sobrenaturales.',
      imagen: 'img/stranger_things.jpg'
    },
    {
      titulo: 'Dark',
      descripcion: 'Viajes en el tiempo en un pueblo alemán.',
      imagen: 'img/dark.jpg'
    },
    {
      titulo: 'The Mandalorian',
      descripcion: 'Un cazarrecompensas en el universo Star Wars.',
      imagen: 'img/mandalorian.jpg'
    },
    {
      titulo: 'Black Mirror',
      descripcion: 'Relatos distópicos sobre la tecnología.',
      imagen: 'img/black_mirror.jpg'
    },
    {
      titulo: '24',
      descripcion: 'Un agente debe salvar al país en 24 horas.',
      imagen: 'img/24.jpg'
    },
    {
      titulo: 'Vikingos',
      descripcion: 'Historias épicas de guerreros nórdicos.',
      imagen: 'img/vikings.jpg'
    },
    {
      titulo: 'Jack Ryan',
      descripcion: 'Un analista de la CIA se convierte en agente.',
      imagen: 'img/jack_ryan.jpg'
    },
    {
      titulo: 'Daredevil',
      descripcion: 'Un abogado ciego lucha contra el crimen.',
      imagen: 'img/daredevil.jpg'
    },
    {
      titulo: 'The Haunting of Hill House',
      descripcion: 'Una familia es perseguida por su pasado.',
      imagen: 'img/hill_house.jpg'
    },
    {
      titulo: 'Marianne',
      descripcion: 'Una escritora enfrenta a su propio demonio.',
      imagen: 'img/marianne.jpg'
    },
    {
      titulo: 'American Horror Story',
      descripcion: 'Temporadas antológicas de terror.',
      imagen: 'img/ahs.jpg'
    },
    {
      titulo: 'Penny Dreadful',
      descripcion: 'Monstruos clásicos se reúnen en Londres.',
      imagen: 'img/penny_dreadful.jpg'
    },
    {
      titulo: 'Breaking Bad',
      descripcion: 'Un profesor se convierte en narcotraficante.',
      imagen: 'img/breaking_bad.jpg'
    }
  ];
  
  const contenedor = document.createElement('div');
  contenedor.classList.add('series-container');
  document.body.appendChild(contenedor);
  
  const modal = crearModal();
  document.body.appendChild(modal);
  
  function crearModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('cerrar');
    closeBtn.innerHTML = '&times;';
  
    const modalTitle = document.createElement('h2');
    const modalDescription = document.createElement('p');
    modalDescription.id = 'modal-descripcion';
    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-imagen');
  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalDescription);
    modal.appendChild(modalContent);
  
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };
  
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    return modal;
  }
  
  function crearTarjeta(serie) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('serie');
  
    const imagen = document.createElement('img');
    imagen.src = serie.imagen;
    imagen.alt = serie.titulo;
    imagen.classList.add('serie-imagen');
  
    const titulo = document.createElement('h3');
    titulo.textContent = serie.titulo;
  
    tarjeta.onclick = () => {
      mostrarDetalles(serie);
    };
  
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
  
    contenedor.appendChild(tarjeta);
  }
  
  function mostrarDetalles(serie) {
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('#modal-descripcion');
    const modalImage = modal.querySelector('.modal-imagen');
  
    modalTitle.textContent = serie.titulo;
    modalDescription.textContent = serie.descripcion;
    modalImage.src = serie.imagen;
  
    modal.style.display = 'block';
  }
  
  series.forEach(serie => {
    crearTarjeta(serie);
  });
  