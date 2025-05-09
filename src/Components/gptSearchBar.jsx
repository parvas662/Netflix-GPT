   
import { lang } from "../Utils/languageConstants" 
import { useSelector } from "react-redux"

export const GptSeachBar = () => {
    const language = useSelector(store => store.config.lang)
    console.log("language",language)
    return ( 
            <form className="relative -top-170  p-6   flex  justify-center gap-1 ">
                <input
                    type="text"
                    className="py-3 px-6 text-md  w-150 rounded-full bg-white border-none outline-none"
                    placeholder= {lang[language].GptSearchPlaceholder}
                />

                <button className="p-3 w-34 bg-red-700 hover:bg-red-600 text-white rounded-full">
                    {lang[language].search}
                </button>
            </form>  
    )
};
