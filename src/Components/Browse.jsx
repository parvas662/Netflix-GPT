
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { GptSearch } from "./GPTSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return <div >
        { showGptSearch ? <GptSearch /> :
            <div className="">
                <MainContainer />
                <SecondaryContainer />
            </div>
        }
    </div>
}
export default Browse; 