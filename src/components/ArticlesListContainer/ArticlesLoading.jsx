import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ArticlesLoading = () => {
  const { color } = useContext(ThemeContext);
  const Loading = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className="box-card-video box-card-video-loading"
      style={{ border: `2px solid ${color.border}` }}
    >
      <div className="video" style={{ background: color.backgroundTextLoading }}>
      </div>
      <div className="info">
        <h2 style={{ background: color.backgroundTextLoading }}>
          El fin del espacio
        </h2>
        <p style={{ background: color.backgroundTextLoading }}>
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
  ));
  return <>{Loading}</>;
};
