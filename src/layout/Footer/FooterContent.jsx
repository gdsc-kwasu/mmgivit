import Link from "next/link";
import React from "react";
import { FooterContentSection } from "./style/Footer.styled";

const FooterContent = () => {
  return (
    <FooterContentSection>
      <div className="content">
        <h3>About MMGIVIT</h3>
        <p>What we believe</p>
        <p>How we are organised</p>
        <p>Our history</p>
      </div>
      <div className="content">
        <h3>Possible Areas of Collaboration</h3>
        <p>Scholarships and Students Sponsorship</p>
        <p>Access to Education for Vulnerable Children</p>
        <p>Donation of Educational Materials</p>
        <p>Collaborative Synergy in Charity</p>
        <p>Provision of Medical kits</p>
      </div>
      <div className="content">
        <h3>Support Our Work</h3>
        <p>Donate now</p>
        <p>Aid us</p>
        {/* <Link href="https://forms.gle/b1KS8vDcP3yuwhZLA" passHref>
          <a href="https://forms.gle/b1KS8vDcP3yuwhZLA" target="__blank">
            Work with us
          </p>
        */}
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
