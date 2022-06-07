import React from "react";
import Link from "next/link";
import propTypes from "prop-types";

export const Menu = ({ items, open }) => {
  const [menuState = open, setMenuState] = React.useState(false);

  return (
    <ul>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          passHref
          onClick={() => setMenuState(menuState)}
        >
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

propTypes.Menu = {
  items: propTypes.array.isRequired,
};
