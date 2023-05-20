import React, { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { notify } from "../../utils/notificationToastify";
import { sendContactEmail } from "../../utils/emailJs";
import { validateForm } from "../../utils/validationsYup";

import "react-toastify/dist/ReactToastify.css";

export const FormContact = () => {
  const { theme, color } = useContext(ThemeContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const styleInput = {
    background: color.background,
    color: color.text,
    border: `2px solid ${color.text}`,
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const validate = await validateForm(user);
      if(validate === true){
        await sendContactEmail(user)
        setUser({
          name: "",
          email: "",
          message: "",
        });
        return
      }
      throw new Error(validate);
    } catch (err) {
      const msg = err.message;
      notify(user, "error", theme, msg);
    }
  };
  const handleInputChange = async (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-contact">
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
  );
};
