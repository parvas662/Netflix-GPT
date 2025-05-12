import GptMovieSuggestion from "./GptMovieSuggestion"
import { GptSeachBar } from "./gptSearchBar"

import backgroundImage from '../assets/backgroundImage.jpg';

// this gptsearch is used in browse page.
export const GptSearch =()=>{  
    return (
        <div >
            <div className=" ">
                <img className="fixed h-screen w-[100%] object-cover " src={backgroundImage} />
            </div> 
            <GptSeachBar/>
            <GptMovieSuggestion/> 
        </div>
    )
} 
