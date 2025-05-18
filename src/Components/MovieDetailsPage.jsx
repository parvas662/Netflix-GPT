import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useVideoPlayer from "../hooks/useVideoPlayer";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import { addWatchListItem } from "../redux-store/watchlistSlice";
import useMovieDetail from "../hooks/useMovieDetail";
import CarouselCard from "./CarouselCard";
import { useState } from "react"; 

const MovieDetailsPage = () => {
    const vId = useParams();
    useVideoPlayer(vId);
    useMovieDetail(vId);
    useRecommendedMovies(vId);
    const dispatch = useDispatch();
    const [addRemoveToWatchlist, setaddRemoveToWatchlist] = useState(false);
    const video = useSelector(store => store.movies.videoPlayer);
    const detail = useSelector(store => store.movies.movieDetail);
    const movies = useSelector(store => store.movies.RecommendMovies);
    //console.log("detialname", detail.original_title)
    //console.log("detail",video)

    const handleAddWatchlist = () => {
        dispatch(addWatchListItem(detail))
        console.log("added")
        setaddRemoveToWatchlist(!addRemoveToWatchlist)
        alert("Movie Added Successfully.")

    }

    const getDateAndTime = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const hourUnit = hours < 2 ? "hr" : "hrs";
        const minutes = totalMinutes % 60;
        const minUnit = minutes < 2 ? "min" : "mins";

        let dates = detail?.release_date.split("-");
        const year = dates[0];
        const date = new Date();
        date.setMonth(Number(dates[1]) - 1);
        const month = date.toLocaleString("en-US", { month: "long" });
        return [hours, hourUnit, minutes, minUnit, year, month]
    }

    let [hours, hourUnit, minutes, minUnit, year, month] = [null, null, null, null, null, null];
    if (detail) {
        [hours, hourUnit, minutes, minUnit, year, month] = getDateAndTime(detail?.runtime)
    }

    return (
        (video || detail) && <div className="bg-black text-white">
            <div className="flex justify-between items-end pr-2 md:pr-10 ">
                <div className="">
                    <h1 className="px-5 md:px-8 md:xl:px-12 pt-25 text-2xl md:text-4xl text-white font-bold"> {detail?.original_title} </h1>
                    <div className="flex gap-2 px-5 pb-1 md:px-8 md:xl:px-12 pt-2 text-sm text-white/80">
                        <span>{month} {year}</span>
                        <span >•</span>
                        <span>{hours}{hourUnit} {minutes}{minUnit}</span>
                    </div>
                </div>
                <div onClick={handleAddWatchlist}
                    className="border-2  mb-3 bg-black px-3 py-3 mr-6 md:flex cursor-pointer font-bold items-center gap-1 text-red-600/70 text-lg border-white/60 rounded-xl">
                    <span className=" hidden md:block "> Add to Watchlist </span>
                    <span className="text-center flex md:hidden lg:hidden xl:hidden">
                        <svg className='w-5 stroke-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="currentStroke" stroke-linecap="round" stroke-linejoin="round">
                            </path></svg>
                        ADD </span>
                </div>
            </div>

            <div className="pr-4  bg-black ">
                < iframe className="w-screen h-150 xl:aspect-video "
                    src={"https://www.youtube.com/embed/" + video?.key + "?rel=0&autoplay=1&mute=0&loop=1mm"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen="0"
                ></iframe>
            </div>
            {detail && <div>
                <div className=" px-4 md:px:6 xl:px-8 text-white h-fit bg-black">
                    <div className="flex gap-2 text-white/90 px-2 pt-4 text-sm">
                        {detail.genres.map((genre, index) => {
                            return (
                                <div key={genre.id || index} className="flex  font-extralight items-center">
                                    <p className="border-1 border-white/70 rounded-4xl px-1 md:px-4  mr-1">{genre.name}</p>
                                    {index !== detail.genres.length - 1 && <span >•</span>}
                                </div>
                            );
                        })}
                    </div>
                    <p className="px-2 py-5 text-sm text-white/60 md:w-[50%]">{detail.overview}</p>
                    <div className="mt-8 ">
                        <p className=" px-2 text-lg md:text-xl font-medium">YOU MIGHT ALSO LIKE</p>
                        <hr className="w-full  bg-gray-400" />
                        <div className="pt-12  ">
                            <CarouselCard movies={movies} />
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default MovieDetailsPage;