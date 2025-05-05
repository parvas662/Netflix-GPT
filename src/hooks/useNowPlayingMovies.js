import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux-store/moviesSlice";

const useNowPlayingMovies  = ()=>{
    // fetching movies from tmdb api and putting it into redux store.

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_Options)
        const json = await data.json();
        console.log(json)
        dispatch(addNowPlayingMovies(json.results))
    } 
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}


export default useNowPlayingMovies;