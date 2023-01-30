import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { sendContactEmail } from "../../utils/emailJs";
import "./Contacto.scss";

export const Contacto = () => {
  const { color } = useContext(ThemeContext);

  const styleInput = {
    background: color.background,
    color: color.text,
    border: `2px solid ${color.text}`,
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await sendContactEmail(user)
      setUser({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error to submit form contacto");
    }
  };

  const handleInputChange = async (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contacto">
      <h2>Completa nuestro formulario para contactarnos</h2>
      <form onSubmit={handleSubmit} className="form-contacto">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="nombre"
          name="name"
          style={styleInput}
          value={user.name}
        />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="email"
          name="email"
          style={styleInput}
          value={user.email}
        />
        <textarea
          name="message"
          onChange={handleInputChange}
          placeholder="mensaje..."
          cols="30"
          rows="10"
          style={styleInput}
          value={user.message}
        />
        <input
          type="submit"
          value="Enviar"
          className="submit"
          style={styleInput}
        />
      </form>
    </div>
  );
};
