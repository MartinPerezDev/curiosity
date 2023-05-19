import React from "react";
import { Links } from "./Links";

export const Authors = ({ authors }) => {
  const color = {
    text: "#fff",
    border: "#fff",
  };
  
  return (
    <div className="box-authors">
      {authors.map(({ id, name, links, image }) => (
        <div key={id} className="author-card" style={{backgroundImage: `url("${image}")`}}>
          <p>{name}</p>
          <Links links={links} color={color} />
        </div>
      ))}
    </div>
  );
};
