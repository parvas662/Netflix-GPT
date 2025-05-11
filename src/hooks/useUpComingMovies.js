/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../redux-store/moviesSlice";


const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.nowPlayingMovies);
    
    const getUpComingMovies = async ()=>{        
        const  upComing = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,API_Options);
        const json = await upComing.json();
        // dispatch an action to store Moviedata in movieSlice Store. 
        dispatch(addUpComingMovies(json.results));
        
    }

    useEffect(()=>{
        !upComingMovies && getUpComingMovies();
    }, [])
}

export default useUpComingMovies;