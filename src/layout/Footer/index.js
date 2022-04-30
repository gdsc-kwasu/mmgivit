import React from "react";
import { FooterContainer } from "./style/footer.styled";

const DATE = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright &copy; {DATE}</p>
    </FooterContainer>
  );
};

export default Footer;
