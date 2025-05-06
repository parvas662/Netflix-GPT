import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    
   console.log("popular",movies.popularMovies)
    return (
        <div className="bg-black ">
            {/*MovieList component  */}
            <div className=" relative pl-5 -mt-66 z-20">

                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular "} movies={movies.popularMovies} />
                <MovieList title={"UpComing "} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending "} movies={movies.nowPlayingMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer;