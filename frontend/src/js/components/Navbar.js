import React, { useState } from 'react'; // Import useState hook
import '../../css/Navbar.css';

export default function Navbar() {
  // Define the state for controlling the dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li>Inicio</li>
        <li>Recomendaciones</li>
        <li>Preguntas frecuentes</li>
        <li>Contacto</li>
        <li className="dropdown" 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}>
          <span className="dropbtn">Contenido</span>
          {showDropdown && (
            <ul className="dropdown-content">
              <li><a href="#">Movies</a></li>
              <li><a href="#">Series</a></li>
            </ul>
          )}
        </li>
        <li>Registro</li>
        <li>Inicio de sesión</li>
      </ul>
    </nav>
  );
}
