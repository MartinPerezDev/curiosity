import "./SobreNosotros.scss";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import React, { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const SobreNosotros = () => {
  const { color } = useContext(ThemeContext);

  const authors = [
    {
      name: "Kurzgesagt",
      links: [
        {
          name: "Youtube",
          icon: <AiOutlineYoutube className="icon" />,
          url: "https://www.youtube.com/@kurzgesagt",
        },
        {
          name: "Instagram",
          icon: <AiOutlineInstagram className="icon" />,
          url: "https://www.youtube.com/@kurzgesagt",
        },
      ],
    },
  ];
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
          {authors.map((author) => {
            return (
              <div className="author">
                <p>{author.name}</p>
                <div className="redes">
                  {author.links.map((link) => {
                    return (
                      <a
                        style={{
                          color: color.text,
                          border: `1px solid ${color.border}`,
                        }}
                        href={link.url}
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                      >
                        {link.icon}
                        <p>{link.name}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text">
        <h3>
          Si te ha gustado nuestro proyecto y deseas apoyar nuestro desarrollo
          puedes visitar nuestras demas webs:
        </h3>
        <h3>o colaborar en el siguiente link:</h3>
      </div>
    </div>
  );
};
