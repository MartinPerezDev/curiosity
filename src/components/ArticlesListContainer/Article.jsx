import React, { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export const Article = ({ title, description, videoUrl, categories }) => {
  const [loadingVideo, setLoadingVideo] = useState(true);
  const { color } = useContext(ThemeContext);
  const { border, backgroundTextLoading } = color;

  const handleVideoLoad = () => {
    setLoadingVideo(false);
  };

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
      <div
        className="video"
        style={{ background: `${loadingVideo ? backgroundTextLoading : ""}` }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
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
