 
import { useNavigate } from "react-router-dom";
import { Image_CDN_Url } from "../Utils/constants"; 
import { useEffect } from "react";

 
const WishlistMoiveCard = ({movies, toggleWatchList, selectIds, setSelectIds}) =>{ 
    const navigate = useNavigate();
    
    const handleClick = (id)=>{
        navigate(`/browse/${id}`)
    }

    const handleCheckboxChange = (movieId)=>{ 
        setSelectIds((prev) => prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
  ); 
    }
        useEffect(() => {
            console.log("Updated selectIds:", selectIds);
            }, [selectIds])

    return (
        <div>
            
            <div className="w-screen object-cover pt-10  md:pt-0 lg:pt-0 px-20 flex flex-wrap gap-5 justify-start "> 
                
                {movies && movies.map((movie) =>
                    <div className="relative w-48 h-fit hover:rounded-lg mb-10" key = {movie.id}>
                        <img onClick ={()=>{handleClick(movie.id)}}
                             className=" hover:rounded-xl rounded-md cursor-pointer hover:scale-103 hover:border-4 hover:border-red-600 " src={Image_CDN_Url + movie.poster_path} alt={movie.original_title}/>
                        
                        { toggleWatchList &&
                            <div className="backdrop-blur-[1px] md:backdrop-blur-3xl w-full h-full absolute top-0 ">
                            <input 
                            type = "checkbox" 
                            className = "absolute top-2 right-2 w-5 h-5 "   
                            checked={selectIds.includes(movie.id)}
                            onChange = {() => handleCheckboxChange(movie.id)}
                            /> 
                        </div> }


                    </div>  
                )} {/* list of movies  checked = {selectIds.includes(movie.id)}
                */}
            </div>  
        </div>
        )
    } 



export default WishlistMoiveCard;