import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Form/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/cineflix/CineFlix/backend/php/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      if (result.success) {
        navigate("/preferences");
      } else {
        alert(result.message || "Error al iniciar sesión");
      }
    } catch (error) {
      alert("Error de red o de conexión con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginForm;
