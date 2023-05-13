import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export const Article = ({ title, description, videoUrl, categories }) => {
  const { color } = useContext(ThemeContext);
  const { border } = color;

  const categoriesList = categories.map(({ color, name }, i) => (
    <div
      className="categorie"
      style={{ border: `1.5px solid ${border}` }}
      key={i + name}
    >
      <div className="color" style={{ backgroundColor: color }}></div>
      <p>{name}</p>
    </div>
  ));

  return (
    <div className="box-card-video" style={{ border: `2px solid ${border}` }}>
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="categories">{categoriesList}</div>
      </div>
    </div>
  );
};
