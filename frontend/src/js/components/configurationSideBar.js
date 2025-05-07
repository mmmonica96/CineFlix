import React, { useState, useEffect } from "react";
import "../../css/configurationSideBar.css";

export default function ConfiguracionSidebar() {
  const [mostrar, setMostrar] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [idioma, setIdioma] = useState("es");

  // Al montar el componente, verificamos el estado del modo oscuro desde localStorage
  useEffect(() => {
    const darkModeStatus = localStorage.getItem("darkMode");
    if (darkModeStatus === "enabled") {
      setModoOscuro(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Función para alternar el modo oscuro
  const handleDarkModeToggle = () => {
    setModoOscuro(!modoOscuro);
  };

  // Actualizar el localStorage y la clase del body cada vez que cambia el estado del modo oscuro
  useEffect(() => {
    if (modoOscuro) {
      localStorage.setItem("darkMode", "enabled");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("darkMode", "disabled");
      document.body.classList.remove("dark-mode");
    }
  }, [modoOscuro]);

  return (
    <>
      {/* Botón que controla la visibilidad del sidebar de configuración */}
      <button
        className="btn-global-config"
        onClick={() => setMostrar(!mostrar)}
      >
        ⚙️ Configuración
      </button>

      {/* Sidebar con las configuraciones */}
      {mostrar && (
        <aside className="sidebar-global-config">
          <br />
          {/* Configuración de modo oscuro */}
          <label>
            <input
              type="checkbox"
              checked={modoOscuro}
              onChange={handleDarkModeToggle}
            />
            Modo oscuro
          </label>

          <div>
            {/* Selector de idioma */}
            <label htmlFor="idioma">Idioma:</label>
            <select
              id="idioma"
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
            >
              <option value="es">Español</option>
            </select>
          </div>
        </aside>
      )}
    </>
  );
}
