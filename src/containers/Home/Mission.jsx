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
            To be Nigeria's foremost charity initiative in promoting charity as
            a tool for the upliftment of the less privileged.
          </p>
        </Fade>
      </Fade>
      <MissionSection />
    </MissionContainer>
  );
};

export default Mission;
