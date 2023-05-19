import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { Authors } from "../components/About/Authors";
import { Links } from "../components/About/Links";
import { authorsCuriosities } from "../data/authorsCuriosities";
import { myLinks } from "../data/myLinks";
import { FcBinoculars, FcClapperboard, FcLike } from "react-icons/fc";

import "./About.scss";

const About = () => {
  const { color } = useContext(ThemeContext);

  const missionContent = (
    <>
      <div className="title">
        <FcBinoculars className="icon-title" />
        <h2>Nuestra Mision</h2>
      </div>
      <h3>
        En Curiosity, nuestra misión es recopilar videos de curiosidades sobre
        diversos temas y compartirlos en nuestra plataforma web. Si bien no
        somos los autores de los videos, nos enorgullece proporcionar enlaces a
        los canales y redes oficiales de los creadores. Despertamos la
        curiosidad de nuestros usuarios, permitiéndoles descubrir y aprender
        sobre fascinantes temas. Respetamos los derechos de autor y nos
        comprometemos a mantener la calidad de los contenidos que compartimos.
        Únete a nosotros en esta aventura de descubrimiento, donde la curiosidad
        no tiene límites. Juntos, exploraremos el asombroso mundo del
        conocimiento.
      </h3>
    </>
  );
  const historyContent = (
    <>
      <div className="title">
        <FcLike className="icon-title" />
        <h2>Nuestra Historia</h2>
      </div>
      <h3>
        La historia de Curiosity comenzó con una visión de fomentar la
        curiosidad y el aprendizaje. De un pequeño blog a una plataforma en
        constante crecimiento, nos esforzamos por compartir videos de
        curiosidades seleccionados de creadores originales. Juntos, inspiramos
        mentes y promovemos el descubrimiento de un mundo fascinante
      </h3>
    </>
  );

  return (
    <div id="about">
      <div className="info">
        <div className="info-text">{missionContent}</div>
        <div className="info-text">{historyContent}</div>
        <div className="authors">
          <div className="title">
            <FcClapperboard className="icon-title" />
            <h2>Creadores de contenido</h2>
          </div>
          <Authors authors={authorsCuriosities} />
        </div>
      </div>
      <div className="text">
        <h3>
          Si te ha gustado nuestro proyecto y deseas apoyar nuestro desarrollo,
          te invitamos a visitar los siguientes enlaces. Ahí podrás colaborar
          con nosotros o explorar otros proyectos en los que hemos trabajado:
        </h3>
        <Links links={myLinks} color={color} />
      </div>
    </div>
  );
};

export default About;
