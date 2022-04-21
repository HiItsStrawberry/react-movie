import React from "react";
import { PropTypes } from "prop-types";

//Styles
import { Wrapper, Content } from "./Grid.styles";

const index = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

index.propTypes = {
  header: PropTypes.string.isRequired,
};

export default index;
