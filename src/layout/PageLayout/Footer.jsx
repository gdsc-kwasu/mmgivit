import FooterContent from "./FooterContent";
import { FooterContainer } from "./style/Footer.styled";

const DATE = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent />
      <p>Copyright &copy; {DATE}</p>
    </FooterContainer>
  );
};

export default Footer;
