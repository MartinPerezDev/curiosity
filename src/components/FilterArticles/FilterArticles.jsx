import React, { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ArticlesContext } from "../../context/ArticlesContext";
import { BsTrash } from "react-icons/bs";

import "./filterArticles.scss";

export const FilterArticles = () => {
  const { handleFilter, resetFilter, categories } = useContext(ArticlesContext);
  const { color } = useContext(ThemeContext);
  const { border } = color;
  const [typeCategories, setTypeCategories] = useState("");
  const [toggleCategories, setToggleCategories] = useState(false);

  const toggleMenuCategories = () => {
    setToggleCategories((prevState) => !prevState);
  };

  const setFilter = (filter) => {
    handleFilter(filter);
    setTypeCategories(filter);
    toggleMenuCategories();
  };
  const reset = (e) => {
    resetFilter();
    setTypeCategories("");
    e.stopPropagation();
  };

  const categoriesMenu = categories.current.map(({ id, name, color }) => (
    <div
      className="categorie"
      style={{ border: `1.5px solid ${border}` }}
      key={id}
      onClick={() => setFilter(name)}
    >
      <div className="color" style={{ backgroundColor: color }}></div>
      <p>{name}</p>
    </div>
  ));

  const toggleCategoriesClass = toggleCategories
    ? "categoriesHigh"
    : typeCategories === ""
    ? "categoriesDefault"
    : "categoriesLowFilter";

  const arrow = toggleCategories ? (
    <IoIosArrowUp />
  ) : (
    <IoIosArrowDown />
  );

  const showDeleteFilter = typeCategories && (
    <div className="delete-filter">
      <h2>solo {typeCategories}</h2>
      <BsTrash className="icon-delete" onClick={(e) => reset(e)} />
    </div>
  );

  return (
    <div
      id="filter-curiosidades"
      style={{ border: `1px solid ${border}` }}
      className={toggleCategoriesClass}
    >
      <div className="categories-text" onClick={toggleMenuCategories}>
        <h2>Categorias :</h2>
        {showDeleteFilter}
        {arrow}
      </div>
      <div className="categories">{categoriesMenu}</div>
    </div>
  );
};
