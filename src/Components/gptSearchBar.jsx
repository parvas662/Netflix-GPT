
import { useRef } from "react";
import { lang } from "../Utils/languageConstants"
import { useDispatch, useSelector } from "react-redux"
import ai from "../Utils/GeminiAi";
import { API_Options } from "../Utils/constants";
import { addGptSearchResult } from "../redux-store/moviesSlice";

export const GptSeachBar = () => {
    const language = useSelector(store => store.config.lang)
    const SearchText = useRef(null);
    const dispatch = useDispatch(); 
    // function to search movie in TMDB database.  
    const searchMovieTMDB = async (movie) => {
        console.log("movieeee", movie)
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_Options);
        const json = await data.json();
        // console.log(json.results)
        return json.results
    }

    const handleGptSearch = async () => {
        //  console.log(SearchText?.current.value);
        // Make an api call to openAi gpt and get movies Result
        const getQuery = "Act as a Movie Recommendation System and DIRECTLY TELL MOVIES NAME NO OTHER TEXT and also dont show any counting in front of movies and if you are unable to find any movie then return '0' and if" + SearchText?.current.value + "is the name of the movie then tell me name of all the parts of this movie, OR suggest some movies for the query" + SearchText?.current.value + "only give me names of 10 hindi OR english movie , comma seprated like exmaple result given ahead,  I WANT DIRECTLY MOVIES NAME NO OTHER TEXT and if you are unable to find any movie then return 'null'. Example result: don, spiderman, superman, hell";

        const gptResults = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: getQuery,
        });

        console.log("gptResults", gptResults.text)

        // take a movie and search in tmdb server. 
        const gptMovie = gptResults.text.split(",")
        console.log("gptMovies", gptMovie)
        const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray)
        // storing data into redux store

        dispatch(addGptSearchResult(tmdbResults))
        console.log("tmdb", tmdbResults)

    }

    return (
        <div className="absolute top-42 md:top-32 h-12  md:h-10 w-full  flex md:justify-center " >
            <form className=" flex  justify-center gap-1 w-full z-12  "
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={SearchText}
                    type="text"
                    className="py-3 px-2 md:px-6 text-sm md:text-md w-70 md:w-150 rounded-xl bg-white border-none outline-none"
                    placeholder={lang[language].GptSearchPlaceholder}
                />

                <button
                    onClick={handleGptSearch}
                    className="p-3 md:p-2 md:w-34 bg-red-700 text-center text-sm font-bold hover:bg-red-600 text-white rounded-xl">
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
};
