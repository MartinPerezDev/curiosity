import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdReturnLeft } from "react-icons/io";

export const ButtonToggleMenu = ({
  icon,
  handleToggleMenu,
  text,
  backgroundOpacity,
}) => {

  const getButtonProps = () => ({
    className: "button button-left",
    style: { color: text, background: backgroundOpacity },
  });

  const iconComponent =
    icon === "hamburguer" ? (
      <GiHamburgerMenu {...getButtonProps()} />
    ) : (
      <IoMdReturnLeft {...getButtonProps()} />
    );

  return (
    <div className="toggle" onClick={handleToggleMenu}>
      {iconComponent}
    </div>
  );
};
