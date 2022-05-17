import Link from "next/link";
import { HeaderContainer, IntroContent } from "./style/Header.styled";
import Navbar from "./Navbar";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <IntroContent>
        <div>
          <Fade cascade triggerOnce>
            <Fade direction="down">
              <h1>Your Donation can Save Someone&#39;s Future</h1>
            </Fade>
            <Fade direction="up">
              <p>lorem ipsum minim mollit non ullamco est sit aliqua dolor.</p>
            </Fade>
            <Link href="#" passHref>
              <a>
                <strong>&gt;</strong> Discover more about us
              </a>
            </Link>
          </Fade>
        </div>
      </IntroContent>
    </HeaderContainer>
  );
};

export default Header;
