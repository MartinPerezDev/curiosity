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
    image:
      "https://firebasestorage.googleapis.com/v0/b/curiosity-app-cec1f.appspot.com/o/authors%2Fkur.webp?alt=media&token=eb3f5db5-f130-4777-9d5c-45fc9d72796e",
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
    image:
      "https://firebasestorage.googleapis.com/v0/b/curiosity-app-cec1f.appspot.com/o/authors%2Fchu.webp?alt=media&token=e03bbee4-dceb-422b-8829-1b11ed56c02d",
  },
];
