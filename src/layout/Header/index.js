import React from "react";
import Link from "next/link";
import { HeaderContainer, IntroContent } from "./style/header.styled";
import Navbar from "@components/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <IntroContent>
        <div>
          <h1>Your Donation can Save Someone&#39;s Future</h1>
          <p>lorem ipsum minim mollit non ullamco est sit aliqua dolor.</p>
          <Link href="#" passHref>
            <a>
              <strong>&gt;</strong> Discover more about us
            </a>
          </Link>
        </div>
      </IntroContent>
    </HeaderContainer>
  );
};

export default Header;
