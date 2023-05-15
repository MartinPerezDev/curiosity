import React from "react";

import { ArticlesListContainer } from "../components/ArticlesListContainer/ArticlesListContainer";

import "./Curiosities.scss";

export const Curiosities = () => {
  const propType = "all";

  return (
    <div id="curiosidades">
      <ArticlesListContainer type={propType} />
    </div>
  );
};
