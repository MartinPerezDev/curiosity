import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdReturnLeft } from "react-icons/io";

export const ButtonToggleMenu = ({ icon, handleToggleMenu, color }) => {
  return (
    <div className="toggle" onClick={handleToggleMenu}>
      {icon === "hamburguer" ? (
        <GiHamburgerMenu
          className="button button-left"
          style={{ color: color.text, background: color.backgroundOpacity }}
        />
      ) : (
        <IoMdReturnLeft
          className="button button-left"
          style={{ color: color.text, background: color.backgroundOpacity }}
        />
      )}
    </div>
  );
};
