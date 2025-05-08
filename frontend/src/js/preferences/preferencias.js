import React, { useState, useEffect } from 'react';
import '../../css/Preferences/preferencias.css';

const generosEjemplo = [
  { nombre: "Acción", imagen: "/img/generos/accion.jpg" },
  { nombre: "Fantasía", imagen: "/img/generos/fantasia.jpg" },
  { nombre: "Comedia", imagen: "/img/generos/comedia.jpg" },
  { nombre: "Terror", imagen: "/img/generos/terror.jpg" },
  { nombre: "Drama", imagen: "/img/generos/drama.jpg" },
  { nombre: "Ciencia Ficción", imagen: "/img/generos/scifi.jpg" },
  { nombre: "Romance", imagen: "/img/generos/romance.jpg" },
  { nombre: "Animación", imagen: "/img/generos/animacion.jpg" }
];

export default function PreferencesPage() {
  const [seleccionados, setSeleccionados] = useState([]);
  const [guardado, setGuardado] = useState(false);
  const [logueado, setLogueado] = useState(null); // null = aún cargando

  useEffect(() => {
    fetch('http://localhost/cineflix/CineFlix/backend/php/preferencias.php', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setLogueado(data.loggedIn))
      .catch(() => setLogueado(false));
  }, []);

  const toggleGenero = (nombre) => {
    setSeleccionados(prev =>
      prev.includes(nombre)
        ? prev.filter(g => g !== nombre)
        : [...prev, nombre]
    );
    setGuardado(false);
  };

  const guardarPreferencias = () => {
    if (seleccionados.length === 0) return;

    const mensaje = `✅ Preferencias guardadas correctamente en la base de datos.\n\n🎬 Géneros seleccionados:\n- ${seleccionados.join('\n- ')}`;
    alert(mensaje);
    setGuardado(true);
  };

  useEffect(() => {
    if (guardado) {
      const timer = setTimeout(() => setGuardado(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [guardado]);

  if (logueado === null) return <p className="preferences-title">Cargando...</p>;
  if (!logueado) return <p className="preferences-title">⚠️ Debes iniciar sesión para acceder a tus preferencias.</p>;

  return (
    <div className="preferences-container">
      <h1 className="preferences-title">Selecciona tus géneros favoritos</h1>

      <div className="generos-grid">
        {generosEjemplo.map((genero) => (
          <label
            key={genero.nombre}
            className={`genero-card ${seleccionados.includes(genero.nombre) ? 'seleccionado' : ''}`}
          >
            <input
              type="checkbox"
              checked={seleccionados.includes(genero.nombre)}
              onChange={() => toggleGenero(genero.nombre)}
              className="checkbox"
            />
            <img src={genero.imagen} alt={genero.nombre} className="genero-img" />
            <span className="genero-nombre">{genero.nombre}</span>
          </label>
        ))}
      </div>

      <button
        className="guardar-btn"
        onClick={guardarPreferencias}
        disabled={seleccionados.length === 0}
      >
        Guardar Preferencias
      </button>

      {guardado && seleccionados.length > 0 && (
        <div className="alerta-exito">
          ✅ Tus preferencias se han guardado correctamente en la base de datos.
          <ul className="lista-seleccionados">
            {seleccionados.map((genero) => (
              <li key={genero}>🎬 {genero}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
