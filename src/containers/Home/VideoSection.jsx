import { VidContainer } from "./style/Video.styled";
import { Fade } from "react-awesome-reveal";
import Youtube from "@components/Youtube";

const VideoSection = () => {
  return (
    <VidContainer>
      <div className="texts">
        <Fade cascade triggerOnce>
          <Fade direction="up" triggerOnce>
            <h2>
              We redistribute over <span>1000+</span> items annually to the less
              priviledged.
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce>
            <p>
              We are talking of items ranging from TVs, Home Theater Sets, Bed
              Frames, Mattresses, Clothes, Shoes, etc.
            </p>
          </Fade>
        </Fade>
      </div>
      <div className="video-container">
        <Fade direction="up" triggerOnce>
          <div className="video">
            <Youtube video="o5lXYctysFg" />
          </div>
        </Fade>
      </div>
    </VidContainer>
  );
};

export default VideoSection;
