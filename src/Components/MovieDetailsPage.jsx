import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useVideoPlayer from "../hooks/useVideoPlayer";
import Recommendedmovies from "./Recommendedmovies";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const MovieDetailsPage = () => {
    const vId = useParams();
    useVideoPlayer(vId);
    useRecommendedMovies(vId);
    
    const video = useSelector(store => store.movies.videoPlayer);
    const detail = useSelector(store => store.movies.movieDetail);
    //console.log("detialname", detail.original_title)
    //console.log("detail",video)
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
            <div>
                <h1 className="px-8 md:xl:px-12 pt-25 text-4xl text-white font-bold"> {detail?.original_title} </h1>
                <div className="flex gap-2 px-8 md:xl:px-12 pt-2 text-sm text-white/80">
                    <span>{month} {year}</span>
                    <span >•</span>
                    <span>{hours}{hourUnit} {minutes}{minUnit}</span>
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
                    <p className="px-2 py-5 text-sm md:w-[50%]">{detail.overview}</p>
                    
                    <Recommendedmovies/>
                </div>
            </div>}
        </div>
    )
}

export default MovieDetailsPage;