import MissionSection from "./MissionSection";
import { MissionContainer } from "./style/Mission.styled";

const Mission = () => {
  return (
    <MissionContainer>
      <h2 className="heading">Mission and Vision</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet
      </p>
      <MissionSection />
    </MissionContainer>
  );
};

export default Mission;
