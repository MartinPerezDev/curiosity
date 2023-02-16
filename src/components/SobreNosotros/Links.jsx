import React from "react";

export const Links = ({ links, color }) => {
  return (
    <div className="redes">
      {links.map((link) => (
        <a
          key={link.id}
          style={{
            color: color.text,
            border: `1px solid ${color.border}`,
          }}
          href={link.url}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          {link.icon}
          <p>{link.name}</p>
        </a>
      ))}
    </div>
  );
};
