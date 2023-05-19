import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

export const authorsCuriosities = [
  {
    id: 1,
    name: "Kurzgesagt",
    links: [
      {
        id: 1,
        name: "Youtube",
        icon: <AiOutlineYoutube className="icon" />,
        url: "https://www.youtube.com/@kurzgesagt",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <AiOutlineInstagram className="icon" />,
        url: "https://www.instagram.com/kurzgesagt/?hl=es",
      },
    ],
    image: "/assets/kur.jpg",
  },
  {
    id: 2,
    name: "Chubbyemu",
    links: [
      {
        id: 1,
        name: "Youtube",
        icon: <AiOutlineYoutube className="icon" />,
        url: "https://www.youtube.com/@chubbyemu",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <AiOutlineInstagram className="icon" />,
        url: "https://www.instagram.com/chubbyemus/",
      },
    ],
    image: "/assets/chu.jpg",
  },
];
