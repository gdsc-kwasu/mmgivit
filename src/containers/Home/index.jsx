import React from "react";
import Campaign from "./Campaign";
import VideoSection from "./VideoSection";
import Work from "./Work";
import NewsLetter from "./NewsLetter";
import Mission from "./Mission";

const Home = () => {
  return (
    <React.Fragment>
      <Mission />
      <Campaign />
      <VideoSection />
      <Work />
      <NewsLetter />
    </React.Fragment>
  );
};

export default Home;
