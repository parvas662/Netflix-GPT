import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

   // console.log("movies", movies)
    return (
        <div  className="px-6 py-4"> 
            <h1 className="text-3xl pb-6 font-medium text-white">{title}</h1>
            <div className="flex overflow-x-scroll  scrollbar-hidden  ">
                <div className=" flex ">
                    {movies && movies.map((movie) =>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} movieTitle={movie.original_title} />
                    )} {/* lsit of movies */}
                </div>
            </div>
        </div>
    )  
}

export default MovieList;