import Image from "next/image";
import Link from "next/link";
import { CampaignContainer } from "./style/Campaign.styled";
import { CAMPAIGN_CONTENTS_ITEMS } from "@/utils/constants";
import { Fade } from "react-awesome-reveal";

const Campaign = () => {
  return (
    <CampaignContainer>
      <h2 className="heading">What we do</h2>
      <p className="description-para">
        We are dedicated to the entrenchment of the culture of charity as a
        means of uplifting the less privileged by redistributing wealth,
        engaging in charity and charitable acts and promoting ideas of giving.
        sharing and kindness in the society irrespective of religious, ethnic
        and/or political considerations.
      </p>
      <div className="content">
        <Fade direction="up" cascade triggerOnce>
          {CAMPAIGN_CONTENTS_ITEMS.map((items, index) => (
            <div key={index} className="content-cards">
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
        </Fade>
      </div>
    </CampaignContainer>
  );
};

export default Campaign;
