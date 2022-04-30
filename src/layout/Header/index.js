import Link from "next/link";
import React from "react";
import { Navbar } from "./style/header.styled";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Header = () => {
  return (
    <Navbar>
      <h2>Logo</h2>
      {NAV_ITEMS.map((items, index) => {
        return (
          <ul>
            <Link href={items.path}>
              <li className="nav-item" key={index}>
                {items.name}
              </li>
            </Link>
          </ul>
        );
      })}
    </Navbar>
  );
};

export default Header;
