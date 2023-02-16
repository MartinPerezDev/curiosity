import React, { useContext } from "react";

import { ThemeContext } from "./../../context/ThemeContext";
import { Authors } from "./Authors";
import { Links } from "./Links";
import { authors, myLinks } from "../../data/sobreNosotros";

import "./SobreNosotros.scss";

export const SobreNosotros = () => {
  const { color } = useContext(ThemeContext);

  

  return (
    <div id="sobre-nosotros">
      <div className="disclaimer">
        <h3>
          curiosity es una web que recopila videos de curiosidades relacionados
          a diferentes temas, ninguno de los videos expuestos es de nuestra
          autoria, a continuacion dejamos los enlaces a los canales y redes
          oficiales autores de dicho material:
        </h3>
        <div className="authors">
          <Authors authors={authors} color={color} />
        </div>
      </div>
      <div className="text">
        <h3>
          Si te ha gustado nuestro proyecto y deseas apoyar nuestro desarrollo
          puedes visitar nuestras demas webs:
        </h3>
        <h3>o colaborar en el siguiente link:</h3>
        <Links links={myLinks} color={color} />
      </div>
    </div>
  );
};
