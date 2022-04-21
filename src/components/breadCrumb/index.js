import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

//Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const index = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

index.propTypes = {
  movieTitle: PropTypes.string,
};

export default index;
