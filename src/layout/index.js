import React from "react";
import propTypes from "prop-types";
import Header from "@layout/Header";
import MissionSection from "./Mission";
import Footer from "@layout/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <MissionSection />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

propTypes.Layout = {
  children: propTypes.node.isRequired,
};
