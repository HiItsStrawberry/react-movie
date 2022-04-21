import React from "react";
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import BreadCrumb from "./breadCrumb";
import MovieInfo from "./movieInfo";
import MovieInfoBar from "./movieInfoBar";
import Actor from "./actor";
import Grid from "./grid";
import Spinner from "./spinner";

//Hook
import useMovieFetch from "../hooks/useMovieFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { id } = useParams();
  const { state: movie, loading, error } = useMovieFetch(id);

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {loading && <Spinner />}
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors &&
          movie.actors.map((actor) => {
            const { id, original_name, character, profile_path } = actor;
            return (
              <Actor
                key={id}
                name={original_name}
                character={character}
                imageUrl={
                  profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                    : NoImage
                }
              />
            );
          })}
      </Grid>
    </>
  );
};

export default Movie;
