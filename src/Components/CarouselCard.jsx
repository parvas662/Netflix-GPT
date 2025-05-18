 
import { useNavigate } from "react-router-dom";
import { Image_CDN_Url } from "../Utils/constants"; 

 
const CarouselCard = ({movies}) =>{ 
    const navigate = useNavigate();

    const handleClick = (id)=>{
        navigate(`/browse/${id}`)
    }
return (
        <div className="pt-10 md:pt-0 lg:pt-0 px-20 flex flex-wrap gap-5 justify-start "> 
            {movies && movies.map((movie) =>
                <div className=" w-48 h-72 hover:rounded-lg mb-10" key = {movie.id}>
                    <img onClick ={()=>{handleClick(movie.id)}} className=" hover:rounded-xl rounded-md cursor-pointer hover:scale-103 hover:border-4 hover:border-red-600 " src={Image_CDN_Url + movie.poster_path} alt={movie.original_title}/>
                </div>  
            )} {/* list of movies */}
        </div>   
    )
} 
 
 
export default CarouselCard;