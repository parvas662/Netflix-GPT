import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = ()=>{
    const movieList = useSelector(store => store.movies.GptMovies)
    console.log("movieList",movieList)
    if (movieList === null){ 
        return null;
    }
   // console.log(movieList)
    return (
        <div className="bg-black/40 w-full absolute top-[30%] pt-10 "> 
        { 
            movieList.map((movie,index)=> movie && <MovieList key={index}  title={movie[0]?.original_title} movies={movie} />
            )
        }    
        </div>
    ) 

}

export default GptMovieSuggestion;