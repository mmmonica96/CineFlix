import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
      <div className="navbar-container">
        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        {/* Navigation menu */}
        <ul className={`navbar-list ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/recomendaciones" onClick={closeMenu}>Recomendaciones</Link></li>
          <li className="dropdown">
            <span className="dropbtn">Contenido</span>
            <ul className="dropdown-content">
              <li><Link to="/movies" onClick={closeMenu}>Movies</Link></li>
              <li><Link to="/series" onClick={closeMenu}>Series</Link></li>
            </ul>
          </li>
          <li><Link to="/faq" onClick={closeMenu}>Preguntas frecuentes</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/registro" onClick={closeMenu}>Registro</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Inicio de sesión</Link></li>
        </ul>
      </div>
    </nav>
  );
}