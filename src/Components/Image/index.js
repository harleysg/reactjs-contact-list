import React from "react";
import PropTypes from "prop-types";

import { Figure, Img } from "./styles";

export default function Image({ src, alt, rounded, ...others }) {
  return (
    <Figure rounded={rounded} {...others}>
      <Img src={src} alt={alt} />
    </Figure>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  rounded: PropTypes.bool
};
