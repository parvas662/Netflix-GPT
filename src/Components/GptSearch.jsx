import GptMovieSuggestion from "./GptMovieSuggestion"
import { GptSeachBar } from "./gptSearchBar"

import backgroundImage from '../assets/backgroundImage.jpg';

// this gptsearch is used in browse page.
export const GptSearch =()=>{  
    return (
        <div >
            <div className="">
                <img className="fixed top-0" src={backgroundImage} />
            </div> 
            <GptSeachBar/>
            <GptMovieSuggestion/> 
        </div>
    )
} 
