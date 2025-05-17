 
import { useEffect } from "react";
import { addRecommendedMovies } from "../redux-store/moviesSlice";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";

const useRecommendedMovies = (vId) => {
    const dispatch = useDispatch();
    const getRecommendedMovies = async()=>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/${vId.movieId}/recommendations?language=en-US&page=1`,
            API_Options) 
        const json = await data.json();
        console.log("RECOMMNEDED",json)
        
        const tenMovies = json?.results.slice(0, 10); // Use only first 10
        dispatch(addRecommendedMovies(tenMovies))
    } 

    useEffect(() => {
        window.scrollTo(0, 0);
       getRecommendedMovies(); 
    }, [vId])
}



export default useRecommendedMovies;