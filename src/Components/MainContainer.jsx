import { useSelector } from "react-redux"; 
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const  MainContainer = ()=> {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return ;

    // need 1 movie to display in videobackground.
    const mainMovie = movies[0];
    
    const {original_title, overview, id} = mainMovie;
    return (
        <div className="bg-black xl:pt-10 md:pt-12 pt-18 " >
            <VideoTitle movieId={id} title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>


        </div>
    )
}

export default MainContainer;
