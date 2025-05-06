/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux"; 
import { addPopularMovies } from "../redux-store/moviesSlice";

const usePopularMovies  = ()=>{
    // fetching movies from tmdb api and putting it into redux store.

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options)
        const json = await data.json();
        
        dispatch(addPopularMovies(json.results))
    } 
    useEffect(() => {
        getPopularMovies();
    }, [])
}


export default usePopularMovies;