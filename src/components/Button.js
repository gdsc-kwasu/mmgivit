import React from "react";
import propTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

propTypes.Button = {
  children: propTypes.node.isRequired,
  className: propTypes.string.isRequired,
};
