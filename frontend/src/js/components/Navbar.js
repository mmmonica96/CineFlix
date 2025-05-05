import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../../css/Navbar.css';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/recomendaciones">Recomendaciones</Link></li>
        <li><Link to="/faq">Preguntas frecuentes</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}>
          <span className="dropbtn">Contenido</span>
          {showDropdown && (
            <ul className="dropdown-content">
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/series">Series</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Inicio de sesión</Link></li> {/* Link al LoginForm */}
      </ul>
    </nav>
  );
}
