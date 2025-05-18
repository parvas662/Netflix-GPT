
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetail } from "../redux-store/moviesSlice";

// fetching trailer video and used in videoBackgreound component.
// fetch trailer video && updating the store with trailer video data
    
const useMovieDetail = (vId)=>{
    const dispatch  = useDispatch();
    const detail = useSelector(store => store.movies.movieDetail);
    const getMovieDetail = async () => {
        const detail = await fetch(`https://api.themoviedb.org/3/movie/${vId.movieId}?language=en-US`,API_Options)
        const jsonDetail = await detail.json();
        //console.log(jsonDetail) 
        dispatch(addMovieDetail(jsonDetail));
        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
       (!detail) && getMovieDetail(); 
    }, [vId])

}

export default useMovieDetail;