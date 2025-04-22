import { useEffect } from "react"
import { OPTIONS } from "../Utilities/Constants"

import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../Utilities/moviesSlice"

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getUpcomingMovies = async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)

    const jsonData = await data.json()

    dispatch(addUpcomingMovies(jsonData.results))
  }

  useEffect(()=>{
    getUpcomingMovies();
  },[])

}

export default useUpcomingMovies;