import React from "react";
import propTypes from "prop-types";
import Header from "@layout/Header";
import MissionSection from "./Mission";
import Campaign from "./Campaign";
import VideoSection from "./VideoSection";
import Work from "./Work";
import Footer from "@layout/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <MissionSection />
        <Campaign />
        <VideoSection />
        <Work />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

propTypes.Layout = {
  children: propTypes.node.isRequired,
};
