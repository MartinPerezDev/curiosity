import React from "react";

import { Link } from "react-router-dom";

export const CategoriesMenu = ({categoriesMenu, handleToggleMenu, color}) => {
  return (
    <div className="nav">
      {categoriesMenu.map((categorie) => (
        <Link
          onClick={handleToggleMenu}
          key={categorie.name}
          to={categorie.route}
          className="link"
          style={{ color: color.text }}
        >
          {categorie.icon}
          <p>{categorie.name}</p>
        </Link>
      ))}
    </div>
  );
};
