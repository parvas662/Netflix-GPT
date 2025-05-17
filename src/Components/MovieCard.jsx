
import {  useNavigate } from "react-router-dom";
import { Image_CDN_Url } from "../Utils/constants";
import VideoBackground from "./VideoBackground";

const MovieCard = ({id,posterPath,movieTitle})=>{
   //  console.log("moviePoster",posterPath)
    const navigate = useNavigate()

    if (!posterPath) return null
    
    const handleClick = (id)=>{

        navigate(`/browse/${id}`)
    }
    return (
        <div className="w-48 pr-3 my-1">
            <img onClick ={()=>{handleClick(id)}} className="hover:rounded-xl rounded-md cursor-pointer hover:scale-103" src={Image_CDN_Url + posterPath} alt={movieTitle} />
        </div>
    )
}

export default MovieCard;