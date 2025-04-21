import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (<>
    <Header />
    <PrimaryContainer />
    <SecondaryContainer />

  </>

  )
}

export default Browse;