import { useSelector } from "react-redux";
import MovieList from "./MovieList"; 

import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const SecondaryContainer = () => { 
    const movies = useSelector((store) => store.movies);
    
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

    return (
        <div className="bg-black/96 ">
            {/*MovieList component  */}
            <div className="relative top-4 xl:-top-80 md:-top-35 overflow-hidden sm:-top-20 sm:md:pl-5 -mt-5  z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"UpComing "} movies={movies.upComingMovies} />
                <MovieList title={"Top Rated "} movies={movies.topRatedMovies} />
                <MovieList title={"Popular "} movies={movies.popularMovies} />
                
            </div>
        </div>
    )
}

export default SecondaryContainer;