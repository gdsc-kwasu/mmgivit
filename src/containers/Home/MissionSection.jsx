import Link from "next/link";
import { MissionContent, MissionContentItem } from "./style/Mission.styled";
import { MISSION_SECTION_ITEMS } from "@/utils/constants";
import { Fade } from "react-awesome-reveal";

const MissionSection = () => {
  return (
    <MissionContent>
      <Fade cascade triggerOnce direction="up">
        {MISSION_SECTION_ITEMS.map((items, index) => (
          <Link key={index} href="#" passHref>
            <MissionContentItem backgroundImage={items.image}>
              <span>{items.text}</span>
            </MissionContentItem>
          </Link>
        ))}
      </Fade>
    </MissionContent>
  );
};

export default MissionSection;
