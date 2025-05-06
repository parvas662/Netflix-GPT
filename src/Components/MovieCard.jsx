import { Image_CDN_Url } from "../Utils/constants";

const MovieCard = ({posterPath})=>{
   //  .log("moviePoster",posterPath)
    return (
        <div  className="w-48 pr-4 ">
            <img  src={Image_CDN_Url + posterPath} alt="movieCard" />
                </div>
    )
}

export default MovieCard;