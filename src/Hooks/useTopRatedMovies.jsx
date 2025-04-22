import { useEffect } from "react"
import { OPTIONS } from "../Utilities/Constants"

import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../Utilities/moviesSlice"

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  const getTopRatedMovies = async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS)

    const jsonData = await data.json()

    dispatch(addTopRatedMovies(jsonData.results))
  }

  useEffect(()=>{
    getTopRatedMovies();
  },[])

}

export default useTopRatedMovies;