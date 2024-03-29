import React from "react";
import Image from "next/image";
import { FooterNavContainer } from "./style/Footer.styled";
import Link from "next/link";
import { ImTwitter, ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";
import { FOOTER_NAV_ITEMS } from "@utils/constants";

const DATE = new Date().getFullYear();

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <div className="wrapper">
        <div>
          <Link href="https://twitter.com/MMGiViT" passHref>
            <ImTwitter className="social-icons" />
          </Link>
          <Link href="https://web.facebook.com/MMgivit/" passHref>
            <ImFacebook className="social-icons" />
          </Link>
          <Link href="https://www.instagram.com/mmgivit_charity/" passHref>
            <ImInstagram className="social-icons" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCdyYrQGmQOsRBGWRl79FIdw"
            passHref
          >
            <ImYoutube className="social-icons" />
          </Link>
        </div>

        <div className="nav-content">
          {FOOTER_NAV_ITEMS.map((items, index) => (
            <Link key={index} href={items.path} passHref>
              <>
                <a className="nav-items">{items.name}</a>
              </>
            </Link>
          ))}
        </div>

        <div className="copyright">
          <span>
            Copyright &copy; {DATE} MMGIVIT International. All rights reserved.
          </span>
          <p className="gdsc-kwasu">
            Powered by: The{" "}
            <a
              style={{ color: "var(--primary-color)" }}
              href="https://gdsc.community.dev/kwara-state-university/"
              target="__blank"
            >
              Google Developer Student Clubs
            </a>{" "}
            chapter at Kwara State University & MMGIVIT CYVC KWASU
          </p>
        </div>
      </div>

      <div className="logo-wrapper">
        <div className="logo-image-wrapper">
          <Image
            src="/images/logo.png"
            alt="MMGVIt Logo"
            width={70}
            height={50}
          />
        </div>
        <div className="logo-title">
          <h3>mmgivit</h3>
          <span>Charity initiative</span>
        </div>
      </div>
    </FooterNavContainer>
  );
};

export default FooterNav;
