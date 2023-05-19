import React from "react";

export const Links = ({ links, color }) => {
  const { text, border } = color;
  return (
    <div className="social-networks">
      {links.map(({ id, url, icon, name }) => (
        <a
          key={id}
          style={{
            color: text,
            border: `1px solid ${border}`,
          }}
          href={url}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          {icon}
          <p>{name}</p>
        </a>
      ))}
    </div>
  );
};
