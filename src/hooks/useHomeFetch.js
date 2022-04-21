import { useState, useEffect, useRef } from "react";

//API
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (searchTerm = "", page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setMovies((prevMovies) => ({
        ...movies,
        results:
          page > 1
            ? [...prevMovies.results, ...movies.results]
            : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial render and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        setMovies(sessionState);
        return;
      }
    }

    setMovies(initialState);
    fetchMovies(searchTerm, 1);
  }, [searchTerm]);

  //Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(searchTerm, movies.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, movies.page]);

  //Write Session Storage
  useEffect(() => {
    if (!searchTerm) {
      movies.page !== 0 &&
        sessionStorage.setItem("homeState", JSON.stringify(movies));
    }
  }, [searchTerm, movies]);

  return {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
