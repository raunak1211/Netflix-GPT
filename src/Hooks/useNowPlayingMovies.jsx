import { useEffect } from "react"
import { OPTIONS } from "../Utilities/Constants"

import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../Utilities/moviesSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS)

    const jsonData = await data.json()

    dispatch(addNowPlayingMovies(jsonData.results))
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies;