import { useDispatch } from "react-redux";
import { OPTIONS } from "../Utilities/Constants";
import { addMovieTralier } from "../Utilities/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const movies = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        OPTIONS
      );
      const data = await movies.json();
      const filterData = data.results.filter((item) => {
        item.type === "Trailer";
      });
      const trailer = filterData.length ? filterData[0] : data.results[0];
      dispatch(addMovieTralier(trailer));
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);

}

export default useMovieTrailer