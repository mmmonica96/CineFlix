import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/cineflix/CineFlix/backend/php/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();

      if (result.success) {
        alert('Mensaje enviado correctamente');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert(result.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error de conexión: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;