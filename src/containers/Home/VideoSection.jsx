import { VidContainer } from "./style/Video.styled";
import { Fade } from "react-awesome-reveal";

const VideoSection = () => {
  return (
    <VidContainer>
      <div className="video-container">
        <Fade direction="right" triggerOnce>
          <div className="video">video here</div>
        </Fade>
      </div>
      <div className="texts">
        <Fade cascade triggerOnce>
          <Fade direction="left">
            <h2>
              We redistribute over <span>1000+</span> items annually to the less
              priviledged.
            </h2>
          </Fade>
          <Fade direction="up">
            <p>
              We are talking of items ranging from TVs, Home Theater Sets, Bed
              Frames, Mattresses, Clothes, Shoes, etc.
            </p>
          </Fade>
        </Fade>
      </div>
    </VidContainer>
  );
};

export default VideoSection;
