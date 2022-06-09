import Link from "next/link";
import React from "react";
import { FooterContentSection } from "./style/Footer.styled";

const FooterContent = () => {
  return (
    <FooterContentSection>
      <div className="content">
        <h3>About mmgivit</h3>
        <Link href="#" passHref>
          <a>What we believe</a>
        </Link>
        <Link href="#" passHref>
          <a>How we fight inequality to beat poverty</a>
        </Link>
        <Link href="#" passHref>
          <a>How we are organized</a>
        </Link>
        <Link href="#" passHref>
          <a>Our history</a>
        </Link>
        <Link href="#" passHref>
          <a>Our finances and accountability</a>
        </Link>
        <Link href="#" passHref>
          <a>Our commitment to safeguarding</a>
        </Link>
        <Link href="#" passHref>
          <a>Frequently Asked Questions</a>
        </Link>
        <Link href="#" passHref>
          <a>Scam warning</a>
        </Link>
      </div>

      <div className="content">
        <h3>Issues we work on</h3>
        <Link href="#" passHref>
          <a>Conflicts and disasters</a>
        </Link>
        <Link href="#" passHref>
          <a>Extreme inequality and essential services</a>
        </Link>
        <Link href="#" passHref>
          <a>Food, climate and natural resources</a>
        </Link>
        <Link href="#" passHref>
          <a>Gender justice and women’s rights</a>
        </Link>
        <Link href="#" passHref>
          <a>Water and sanitation</a>
        </Link>
      </div>

      <div className="content">
        <h3>Support Our Work</h3>
        <Link href="#" passHref>
          <a>Donate now</a>
        </Link>
        <Link href="#" passHref>
          <a>Aid us</a>
        </Link>
        {/* <Link href="https://forms.gle/b1KS8vDcP3yuwhZLA" passHref>
          <a href="https://forms.gle/b1KS8vDcP3yuwhZLA" target="__blank">
            Work with us
          </a>
        </Link> */}
        <Link href="https://forms.gle/b1KS8vDcP3yuwhZLA" passHref>
          <a href="https://forms.gle/b1KS8vDcP3yuwhZLA" target="__blank">
            Volunteer with us
          </a>
        </Link>
      </div>
    </FooterContentSection>
  );
};

export default FooterContent;
