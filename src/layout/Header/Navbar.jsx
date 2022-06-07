import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavContainer } from "./style/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { NAV_ITEMS } from "@utils/constants";
import menuStyles from "./style/mobileMenu.module.scss";
import { Menu } from "./Menu";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  // initializing the state of the menu component.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const mobileMenu = (
    <div className={open ? menuStyles.activeMenu : menuStyles.root}>
      <div className={menuStyles.closeBtn} onClick={() => setOpen(false)}>
        X
      </div>
      <Menu items={NAV_ITEMS} />
    </div>
  );

  return (
    <React.Fragment>
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
          <ul className="nav-container">
            {NAV_ITEMS.map((items, index) => (
              <Link key={index} href={items.path} passHref>
                <li className="nav-item">{items.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <button className="btn btn-menu" onClick={() => setOpen(!false)}>
          <GiHamburgerMenu className="mm" />
        </button>
        <button className="btn btn-search">
          <FiSearch />
        </button>
      </NavContainer>
      {mobileMenu}
    </React.Fragment>
  );
};

export default Navbar;
