import React from "react";

import { ArticlesListContainer } from "../components/ArticlesListContainer/ArticlesListContainer";

import "./Curiosidades.scss";

export const Curiosidades = () => {
  const propType = "all";

  return (
    <div id="curiosidades">
      <ArticlesListContainer type={propType} />
    </div>
  );
};
