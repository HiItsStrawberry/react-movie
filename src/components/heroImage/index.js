import React from "react";
import { PropTypes } from "prop-types";

//Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const index = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

index.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default index;
