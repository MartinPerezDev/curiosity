import React from "react";
import { Links } from "./Links";

export const Authors = ({ authors, color }) => {
  return (
    <>
      {authors.map((author) => (
        <div key={author.id} className="author">
          <p>{author.name}</p>
          <Links links={author.links} color={color} />
        </div>
      ))}
    </>
  );
};
