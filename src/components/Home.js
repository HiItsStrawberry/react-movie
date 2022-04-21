import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Component
import HeroImage from "./heroImage";
import Grid from "./grid";
import Thumb from "./thumb";
import Spinner from "./spinner";
import SearchBar from "./searchBar";
import Button from "./button";

//Hook
import useHomeFetch from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();
  //console.log(movies);

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && movies.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          title={movies.results[0].original_title}
          text={movies.results[0].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.results.map((movie) => {
          const { id, poster_path } = movie;
          return (
            <Thumb
              key={id}
              clickable
              image={
                poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + poster_path
                  : NoImage
              }
              movieId={id}
            ></Thumb>
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {movies.page < movies.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
