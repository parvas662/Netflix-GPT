import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (movieId) => { 
    
    const trailerVideo = useSelector(store => store.movies?.trailerVideo) 
    useMovieTrailer(movieId); // hook. 
    return (
        <div className ="w-full pt-4 ">
            < iframe className="aspect-video w-full " 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&playlist="+ trailerVideo?.key +"&rel=0&modestbranding=1&controls=1"  }
            title="YouTube video player" 
            allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
            
            <div className="aspect-video w-full bg-gradient-to-r from-black/50  absolute top-18 "></div>
        </div>
    )
}

export default VideoBackground;