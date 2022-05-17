import MissionSection from "./MissionSection";
import { MissionContainer } from "./style/Mission.styled";
import { Fade } from "react-awesome-reveal";

const Mission = () => {
  return (
    <MissionContainer>
      <Fade cascade triggerOnce>
        <Fade direction="up">
          <h2 className="heading">Mission and Vision</h2>
        </Fade>
        <Fade direction="up">
          <p className="description-para">
            lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor
            do amet
          </p>
        </Fade>
      </Fade>
      <MissionSection />
    </MissionContainer>
  );
};

export default Mission;
