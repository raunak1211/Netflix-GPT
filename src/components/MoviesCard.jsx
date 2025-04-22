import { API_URL } from "../Utilities/Constants"
const MoviesCard = ({poster_path}) => {
  return (
    <div>
        <img className="w-50" alt="Now Playing Movies" src={API_URL + poster_path}  />
    </div>
  )
}

export default MoviesCard