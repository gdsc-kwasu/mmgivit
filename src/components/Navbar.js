import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavContainer } from "@layout/Header/style/header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const NAV_ITEMS = [
  { name: "Blog", path: "/" },
  { name: "Fundraising initiatives", path: "/" },
  { name: "Partners & donors", path: "/" },
  { name: "Researcher", path: "/" },
];

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <NavContainer>
      <div className="logo-container">
        <h2>
          <Image
            src="/images/logo.png"
            alt="mmigvit logo"
            width={screenWidth < 600 ? 60 : 70}
            height={screenWidth < 600 ? 44 : 50}
          />
        </h2>
        {screenWidth > 600 && (
          <ul>
            {NAV_ITEMS.map((items, index) => (
              <Link key={index} href={items.path} passHref>
                <li className="nav-item">{items.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      <button
        className={`btn ${screenWidth < 600 ? "btn-menu" : "btn-search"}`}
      >
        {screenWidth < 600 ? <GiHamburgerMenu className="mm" /> : <FiSearch />}
      </button>
    </NavContainer>
  );
};

export default Navbar;
