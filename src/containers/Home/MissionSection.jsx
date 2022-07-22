import Link from "next/link";
import { MissionContent, MissionContentItem } from "./style/Mission.styled";
import { MISSION_SECTION_ITEMS } from "@utils/constants";
import { Fade } from "react-awesome-reveal";

const MissionSection = () => {
  return (
    <MissionContent>
      <Fade cascade triggerOnce direction="up">
        {MISSION_SECTION_ITEMS.map((items, index) => (
          <MissionContentItem backgroundImage={items.image} key={index}>
            <span>
              <a href={items.seeMore} target="__blank">
                {items.text}
              </a>
            </span>
          </MissionContentItem>
        ))}
      </Fade>
    </MissionContent>
  );
};

export default MissionSection;
