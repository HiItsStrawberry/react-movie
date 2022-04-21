import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { Image } from "./Thumb.styles";

const index = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
};

index.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default index;
