import React from "react";
import { PropTypes } from "prop-types";

//Styles
import { Wrapper } from "./Button.styles";

const index = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

index.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default index;
