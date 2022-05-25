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
            <Fade direction="down" triggerOnce>
              <h1>Your Donation can Save Someone&#39;s Future</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p>
                MMGIVIT engages in the redistribution of wealth and promotion of
                ideas of giving, sharing and kindness to the less privileged in
                the society in many ways.
              </p>
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
