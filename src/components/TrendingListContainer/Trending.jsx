import React from "react";

export const Trending = ({ title, description, videoUrl, categories, loading }) => {
  return (
    <div className="trending-card-video">
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="categories">
          {
            categories.map((categorie)=>(
              <div className="categorie">
                <div className="color" style={{backgroundColor: categorie.color}}></div>
                <p>{categorie.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
