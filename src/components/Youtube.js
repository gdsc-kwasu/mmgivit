import React from "react";
import propTypes from "prop-types";

export default function Youtube({ video }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${video}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

Youtube.propTypes = {
  video: propTypes.string.isRequired,
};
