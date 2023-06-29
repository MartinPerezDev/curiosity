import React, { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ArticlesContext } from "../../context/ArticlesContext";
import { BsTrash } from "react-icons/bs";

import "./FilterArticles.scss";

export const FilterArticles = () => {
  const { handleFilter, resetFilter, categories } = useContext(ArticlesContext);
  const { color } = useContext(ThemeContext);
  const { border, backgroundOpacity } = color;
  const [isOpen, setIsOpen] = useState(false);
  const [filterName, setFilterName] = useState("");

  const applyFilter = (name) => {
    toggleMenu();
    handleFilter(name);
    setFilterName(name);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const reset = () => {
    resetFilter();
    setFilterName("");
    setIsOpen(false);
  };

  const styleBorderTheme = { border: `1px solid ${border}` };
  const classBorderFilter = isOpen ? "border-parcial" : "border-complete";

  const dataCategories = categories.current.map(({ id, name, color }) => (
    <div
      className="box-categorie"
      key={id}
      onClick={() => applyFilter(name)}
      style={styleBorderTheme}
    >
      <div className="circle" style={{ backgroundColor: color }}></div>
      <p>{name}</p>
    </div>
  ));
  const menuCategories = isOpen && (
    <div
      className="box-filter"
      style={{
        ...styleBorderTheme,
        backgroundColor: backgroundOpacity,
      }}
    >
      {dataCategories}
    </div>
  );
  const buttonDeleteFilter = filterName && (
    <div className="thrash" onClick={reset} style={styleBorderTheme}>
      <p>{filterName}</p>
      <BsTrash className="icon-filter" />
    </div>
  );
  const typeArrow = isOpen ? (
    <IoIosArrowUp className="icon-filter" />
  ) : (
    <IoIosArrowDown className="icon-filter" />
  );

  return (
    <div
      id="filter-articles"
      className={classBorderFilter}
      style={styleBorderTheme}
    >
      <div className="filter" onClick={toggleMenu}>
        <h3>Filtrar</h3>
        {typeArrow}
      </div>
      {buttonDeleteFilter}
      {menuCategories}
    </div>
  );
};
