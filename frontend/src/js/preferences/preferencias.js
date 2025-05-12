import React, { useState, useEffect } from "react";
import "../../css/Preferences/preferencias.css";

export default function PreferencesPage() {
  const [generos, setGeneros] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [guardado, setGuardado] = useState(false);
  const [logueado, setLogueado] = useState(null); // null = aún cargando

  useEffect(() => {
<<<<<<< HEAD
    fetch('http://localhost/cineflix/backend/php/preferences.php', {
      credentials: 'include',
=======
    fetch("http://localhost/cineflix/backend/php/preferences.php", {
      credentials: "include",
>>>>>>> origin/monica
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setLogueado(true);
          if (data.generos) setGeneros(data.generos);
          if (data.seleccionadas) setSeleccionados(data.seleccionadas); // cargar selecciones previas
        } else {
          setLogueado(false);
        }
      })
      .catch(() => setLogueado(false));
  }, []);

  const toggleGenero = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
    setGuardado(false);
  };

  const guardarPreferencias = () => {
    if (seleccionados.length === 0) return;

    fetch("http://localhost/cineflix/CineFlix/backend/php/preferences.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ categorias: seleccionados }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("✅ Preferencias guardadas correctamente.");
          setGuardado(true);
        } else {
          alert("❌ No se pudieron guardar las preferencias.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("❌ Error al guardar preferencias.");
      });
  };

  useEffect(() => {
    if (guardado) {
      const timer = setTimeout(() => setGuardado(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [guardado]);

  if (logueado === null)
    return <p className="preferences-title">Cargando...</p>;
  if (!logueado)
    return (
      <p className="preferences-title">
        ⚠️ Debes iniciar sesión para acceder a tus preferencias.
      </p>
    );

  return (
    <div className="preferences-container">
      <h1 className="preferences-title">Selecciona tus géneros favoritos</h1>

      <div className="generos-grid">
        {generos.map((genero) => (
          <label
            key={genero.id}
            className={`genero-card ${
              seleccionados.includes(genero.id) ? "seleccionado" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={seleccionados.includes(genero.id)}
              onChange={() => toggleGenero(genero.id)}
              className="checkbox"
            />
            <img
              src={genero.imagen}
              alt={genero.nombre}
              className="genero-img"
            />
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
            {seleccionados.map((id) => {
              const genero = generos.find((g) => g.id === id);
              return <li key={id}>🎬 {genero?.nombre}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
