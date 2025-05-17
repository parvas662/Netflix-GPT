import { useSelector } from "react-redux"; 
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { Image_CDN_Url } from "../Utils/constants";

 
const Recommendedmovies = () =>{ 
    const navigate = useNavigate();
    const movies = useSelector(store => store.movies.RecommendMovies); 

    console.log("RRRRmovies",movies)
    const handleClick = (id)=>{
        navigate(`/browse/${id}`)
    }
return (
        <div className="mt-10 ">
            <p className=" px-2 text-lg md:text-xl font-medium">YOU MIGHT ALSO LIKE</p>
            <hr className="w-full  bg-gray-400"/>
            <div className="pt-10  bg-black flex flex-wrap gap-5 p-3 "> 
                {movies && movies.map((movie) =>
                    <div className=" w-48 h-72 hover:rounded-lg mb-10" key = {movie.id}>
                    { console.log(movie.poster_path)}
                        <img onClick ={()=>{handleClick(movie.id)}} className=" hover:rounded-xl rounded-md cursor-pointer hover:scale-103 hover:border-4 hover:border-red-600 " src={Image_CDN_Url + movie.poster_path} alt={movie.original_title}/>
                        
                    </div>  
                )} {/* lsit of movies */}
            </div>
        </div>
    )

} 
 
export default Recommendedmovies;