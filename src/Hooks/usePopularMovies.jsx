import { useEffect } from "react";
import { OPTIONS } from "../Utilities/Constants";

import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utilities/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
