import GptMovieSuggestion from "./GptMovieSuggestion"
import { GptSeachBar } from "./gptSearchBar"
  
// this gptsearch is used in browse page.
export const GptSearch =()=>{  
 
    return (
        <div className= "bg-black/90 w-screen h-screen"> 
            <GptSeachBar/>
            <GptMovieSuggestion/> 
        </div>
    )
} 
