/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux-store/moviesSlice";

// fetching trailer video and used in videoBackgreound component.
// fetch trailer video && updating the store with trailer video data
    
const useMovieTrailer = (movieId)=>{
    const dispatch  = useDispatch();
    
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}/videos`, API_Options)
        const json = await data.json();
        
        const filterData = json?.results?.filter(video => video.type === "Trailer");
        const trailer = filterData[0]
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        getMovieTrailer();
    }, [])

}

export default useMovieTrailer;