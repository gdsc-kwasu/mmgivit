import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CampaignContainer } from "./style/campaign.styled";

const CAMPAIGN_CONTENTS = [
  {
    title: "Education",
    icon: "/images/education.png",
    text: "lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    link: "Donate now",
    linkPath: "#",
  },
  {
    title: "Health",
    icon: "/images/health.png",
    text: "lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    link: "Donate now",
    linkPath: "#",
  },
  {
    title: "Community",
    icon: "/images/community.png",
    text: "lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    link: "Donate now",
    linkPath: "#",
  },
];

const Campaign = () => {
  return (
    <CampaignContainer>
      <h2 className="heading">Why We Do This Campaign</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint. Velit officia consequa.
      </p>
      <div className="content">
        {CAMPAIGN_CONTENTS.map((items, index) => (
          <div key={index}>
            <Image
              className="icons"
              src={items.icon}
              alt={items.alternative}
              width={100}
              height={100}
            />
            <h3>{items.title}</h3>
            <p className="description-para">{items.text}</p>
            <Link href={items.linkPath} passHref>
              <a>{items.link}</a>
            </Link>
          </div>
        ))}
      </div>
    </CampaignContainer>
  );
};

export default Campaign;