import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavContainer } from "./style/Header.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { NAV_ITEMS } from "@/utils/constants";

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
        {
          // FIX: Use CSS Media Query(Aye aye captain)
        }
        {
          <ul className="nav-container">
            {NAV_ITEMS.map((items, index) => (
              <Link key={index} href={items.path} passHref>
                <li className="nav-item">{items.name}</li>
              </Link>
            ))}
          </ul>
        }
      </div>

      <button className="btn btn-menu">
        <GiHamburgerMenu className="mm" />
      </button>
      <button className="btn btn-search">
        <FiSearch />
      </button>
    </NavContainer>
  );
};

export default Navbar;
