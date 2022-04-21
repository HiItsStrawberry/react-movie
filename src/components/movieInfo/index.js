import React from "react";
import { PropTypes } from "prop-types";

//Component
import Thumb from "../thumb";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//Image
import NoImage from "../../images/no_image.jpg";

//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const index = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>
                DIRECTOR{movie.directors && movie.directors.length > 1 && "S"}
              </h3>
              {movie.directors &&
                movie.directors.map((director) => {
                  const { id, name } = director;
                  return <p key={id}>{name}</p>;
                })}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

index.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default index;
