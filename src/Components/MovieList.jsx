import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

   console.log("title", title)
   console.log("movies", movies)
    return (
        <div  className="px-4 py-4 "> 
            <h1 className="text-xl md:text-2xl pb-6 font-medium text-white">{title}</h1>
            <div className="flex overflow-auto custom-scroll p-1  ">
                <div className=" flex custom-scroll ">
                    {movies && movies.map((movie) =>
                        <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} movieTitle={movie.original_title} />
                    )} {/* lsit of movies */}
                </div>
            </div>
        </div>
    )  
}

export default MovieList;