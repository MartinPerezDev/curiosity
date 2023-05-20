import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsFolder2Open } from "react-icons/bs";

export const myLinks = [
  {
    id: 1,
    name: "LikedIn",
    icon: <TiSocialLinkedin className="icon" />,
    url: "https://www.linkedin.com/in/juan-martin-perez/",
  },
  {
    id: 2,
    name: "Youtube",
    icon: <AiOutlineYoutube className="icon" />,
    url: "https://www.youtube.com/",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <BsFolder2Open className="icon" />,
    url: "https://www.youtube.com/",
  },
];
