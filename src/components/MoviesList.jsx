import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <div className="p-3">
        <h2 className="pl-3 font-bold text-3xl py-2">{title}</h2>
      <div className="overflow-x-auto manage">
        <div className="pl-5 flex space-x-4 w-max">
          {movie.map((mov) => (
            <MoviesCard key={mov.id} poster_path={mov.poster_path} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MoviesList;
