/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoPlayer } from "../redux-store/moviesSlice";

// fetching trailer video and used in videoBackgreound component.
// fetch trailer video && updating the store with trailer video data
    
const useVideoPlayer = (vId)=>{
    const dispatch  = useDispatch();
    const videoPlayer = useSelector(store => store.movies.VideoPlayer);
    
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${vId.movieId}/videos?language=en-US`, API_Options)
        const json = await data.json();
        
        const filterData = json?.results?.filter(video => (video.type === "Trailer" || video.type === "trailer" || video.type === "Teaser"));
        const trailer = filterData[0]
        dispatch(addVideoPlayer(trailer)) 
    }

    useEffect(() => {
       (!videoPlayer) && getMovieTrailer(); 
    }, [])

}

export default useVideoPlayer;