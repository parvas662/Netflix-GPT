import GptMovieSuggestion from "./GptMovieSuggestion"
import { GptSeachBar } from "./gptSearchBar"

import backgroundImage from '../assets/backgroundImage.jpg';

// this gptsearch is used in browse page.
export const GptSearch =()=>{  
    return (
        <div className="  bg-amber-950 ">
            <div>
                <img className="" src={backgroundImage} />
            </div> 
            <GptSeachBar/>
            <GptMovieSuggestion/> 
        </div>
    )
}