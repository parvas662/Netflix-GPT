import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    
   //console.log("popular",movies)
    return (
        <div className="bg-black ">
            {/*MovieList component  */}
            <div className=" relative xl:-top-80 md:-top-35 overflow-hidden sm:-top-20 sm:md:pl-5 -mt-5 z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"UpComing "} movies={movies.upComingMovies} />
                <MovieList title={"Top Rated "} movies={movies.topRatedMovies} />
                <MovieList title={"Popular "} movies={movies.popularMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer;