import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <div className=" -mt-65 relative z-40">
        <MoviesList title="Now Playing" movie={movies.nowPlayingMovies} />
        <MoviesList title="Popular" movie={movies.popularMovies} />
        <MoviesList title="Top Rated" movie={movies.topRatedMovies} />
        <MoviesList title="Upcoming" movie={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
