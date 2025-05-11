import { Image_CDN_Url } from "../Utils/constants";

const MovieCard = ({posterPath,movieTitle})=>{
   //  console.log("moviePoster",posterPath)
    if (!posterPath) return null
    return (
        <div  className="w-48 pr-4 ">
            <img  src={Image_CDN_Url + posterPath} alt={movieTitle} />
                </div>
    )
}

export default MovieCard;