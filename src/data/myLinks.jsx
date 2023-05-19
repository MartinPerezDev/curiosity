import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsFolder2Open } from "react-icons/bs";
import logoCafecito from "../assets/logo/cafecito.svg";

export const myLinks = [
  {
    id: 1,
    name: "Cafecito",
    icon: <img src={logoCafecito} className="icon image" alt="logo-cafecito" />,
    url: "https://www.youtube.com/@kurzgesagt",
  },
  {
    id: 2,
    name: "LikedIn",
    icon: <TiSocialLinkedin className="icon" />,
    url: "https://www.linkedin.com/in/juan-martin-perez/",
  },
  {
    id: 3,
    name: "Youtube",
    icon: <AiOutlineYoutube className="icon" />,
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    name: "Portfolio",
    icon: <BsFolder2Open className="icon" />,
    url: "https://www.youtube.com/",
  },
];
