import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import "./Disclaimer.scss";

export const Disclaimer = ({ background, border, text, toggleViewDisclaimer }) => {
  return (
    <div id="disclaimer">
      <div
        className="box-disclaimer"
        style={{ background: background, border: `2px solid ${border}` }}
        onClick={toggleViewDisclaimer}
      >
        <div className="icon-box">
          <AiOutlineClose className="icon" color={text} style={{background}} />
        </div>
        <h3>Descargo de derechos de autor:</h3>
        <p>
          En Curiosity, nuestra plataforma web tiene como objetivo recopilar
          videos de curiosidades sobre diversos temas y compartirlos con
          nuestros usuarios. Queremos dejar claro que no somos los autores de
          estos videos, pero nos enorgullece proporcionar enlaces a los canales
          y redes oficiales de los creadores originales. Nuestra intención es
          despertar la curiosidad y permitir que nuestros usuarios descubran y
          aprendan sobre fascinantes temas.
        </p>
        <p>
          Respetamos los derechos de autor y nos comprometemos a mantener la
          calidad de los contenidos que compartimos en nuestra plataforma. Si en
          algún momento consideras que hemos infringido tus derechos de autor,
          te invitamos a ponerte en contacto con nosotros para tomar las medidas
          adecuadas.
        </p>
        <p>
          Únete a nosotros en esta emocionante aventura de descubrimiento, donde
          la curiosidad no tiene límites. Juntos, exploraremos el asombroso
          mundo del conocimiento y disfrutaremos de la diversidad de
          perspectivas que los creadores originales nos brindan.
        </p>
        <p>
          Únete a nosotros en esta emocionante aventura de descubrimiento, donde
          la curiosidad no tiene límites. Juntos, exploraremos el asombroso
          mundo del conocimiento y disfrutaremos de la diversidad de
          perspectivas que los creadores originales nos brindan.
        </p>
        <p>
          Nota: Si eres un creador de contenido y deseas que tus videos sean
          eliminados de nuestra plataforma, por favor contáctanos y tomaremos
          las medidas necesarias.
        </p>
        <p>¡Gracias por ser parte de nuestra comunidad Curiosity!</p>
      </div>
    </div>
  );
};
