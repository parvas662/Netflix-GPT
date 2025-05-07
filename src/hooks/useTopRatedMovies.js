import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux-store/moviesSlice";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const getTopRated = async()=>{
        const topMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_Options);
        const json = await topMovies.json();
        console.log("topRAted",json);
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(()=>{
        getTopRated();
    },[])

}

export default useTopRatedMovies;