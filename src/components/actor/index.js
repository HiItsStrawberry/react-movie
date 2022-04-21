import React from "react";
import { PropTypes } from "prop-types";

import { Wrapper, Image } from "./Actor.styles";

const index = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb"></Image>
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

index.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default index;
