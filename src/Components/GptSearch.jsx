import GptMovieSuggestion from "./GptMovieSuggestion"
import { GptSeachBar } from "./gptSearchBar"
 
import { SUPPORTED_LANGUAGES } from "../Utils/constants"; 

// this gptsearch is used in browse page.
export const GptSearch =()=>{  
 
    return (
        <div  className= "w-screen h-screen bg-black/97">
             
            <GptSeachBar/>
            <GptMovieSuggestion/> 
        </div>
    )
} 
