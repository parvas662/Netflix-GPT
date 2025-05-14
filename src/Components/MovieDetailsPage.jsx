import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";  
import useVideoPlayer from "../hooks/useVideoPlayer";

const MovieDetailsPage = () => { 
    const vId = useParams(); 
    useVideoPlayer(vId);
    const video = useSelector(store => store.movies.videoPlayer);
    console.log(video)
    return (
        video && <div className="bg-black"> 
            <div className="pt-18">
                < iframe className="w-screen h-100 xl:aspect-video " 
                    src={"https://www.youtube.com/embed/" + video?.key + "?rel=0&autoplay=1&mute=0&loop=1mm"}
                    title="YouTube video player"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="0"
                ></iframe>
            </div>
            <div>
                <h1 className="text-white">title </h1>
            </div>
        </div>
    )
}

export default MovieDetailsPage;