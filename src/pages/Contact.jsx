import React from "react";

import { ToastContainer } from "react-toastify";
import { FormContact } from "../components/Contact/FormContact";

import "./Contact.scss";

export const Contact = () => {

  return (
    <div id="contact">
      <ToastContainer />
      <h2>Completa nuestro formulario para contactarnos</h2>
      <FormContact />
    </div>
  );
};
