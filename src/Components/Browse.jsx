
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { GptSearch } from "./GPTSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
   
    return <div className="">
        { showGptSearch ? <GptSearch /> :
            <div className="">
                <MainContainer />
                <SecondaryContainer />
            </div>
        }
    </div>
}
export default Browse; 