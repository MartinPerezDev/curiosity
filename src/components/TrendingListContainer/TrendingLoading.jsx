import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const TrendingLoading = () => {
  const { color } = useContext(ThemeContext)

  return (
    <div
      className="trending-card-video trending-card-video-loading"
      style={{ border: `2px solid ${color.border}` }}
    >
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/asd`}
          title="El fin del espacio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="info">
        <h2 style={{background: color.backgroundTextLoading}}>El fin del espacio</h2>
        <p style={{background: color.backgroundTextLoading}}>
          El viaje espacial es la aventura más emocionante para la humanidad,
          pero en una ironía de la historia podemos detenernos de ir al espacio
          cuanto más lo hagamos. Con cada cohete lanzado estamos creando una
          trampa mortal para la humanidad.
        </p>
        <div className="categories">
          <p>Ciencia</p>
        </div>
      </div>
    </div>
  );
};
