
import {  useNavigate } from "react-router-dom";
import { Image_CDN_Url } from "../Utils/constants";
import VideoBackground from "./VideoBackground";

const MovieCard = ({id,posterPath,movieTitle})=>{
   //  console.log("moviePoster",posterPath)
    const navigate = useNavigate()

    if (!posterPath) return null
    
    const handleClick = (id)=>{
        setTimeout(() => {
            navigate(`/browse/${id}`)
        }, 500);
        
    }
    return (
        <div className="w-46 pr-3 my-1 ">
            <img loading="lazy" 
            onClick ={()=>{handleClick(id)}} className="hover:rounded-xl rounded-md cursor-pointer hover:scale-103" src={Image_CDN_Url + posterPath} alt={movieTitle} />
        </div>
    )
}

export default MovieCard;