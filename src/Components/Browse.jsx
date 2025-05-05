
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
    
    useNowPlayingMovies();
    return <div>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
}
export default Browse;