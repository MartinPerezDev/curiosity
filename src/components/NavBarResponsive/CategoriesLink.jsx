import React from "react";

import { NavLink } from "react-router-dom";

export const CategoriesLink = ({
  type,
  categoriesMenu,
  handleToggleMenu,
  text,
}) => {
  const propsNavLink = (name, route) => ({
    key: name,
    to: route,
    className: "link",
    activeClassName: "active",
    style: { color: text },
    ...(type === "mobile" && { onClick: handleToggleMenu }),
  });

  return (
    <div className="nav">
      {categoriesMenu.map(({ name, route, icon }) => (
        <NavLink {...propsNavLink(name, route)}>
          {icon}
          <p>{name}</p>
        </NavLink>
      ))}
    </div>
  );
};
