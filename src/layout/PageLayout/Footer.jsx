import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";
import { FooterContainer } from "./style/Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent />
      <FooterNav />
    </FooterContainer>
  );
};

export default Footer;
