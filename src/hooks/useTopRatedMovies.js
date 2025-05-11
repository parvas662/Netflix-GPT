/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux-store/moviesSlice";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.nowPlayingMovies);
    
    const getTopRated = async()=>{
        const topMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_Options);
        const json = await topMovies.json();
        //console.log("topRAted",json);
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(()=>{
       !topRatedMovies && getTopRated();
    },[])

}

export default useTopRatedMovies;