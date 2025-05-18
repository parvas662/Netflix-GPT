import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import WishlistMoiveCard from "./WishlistMoiveCard";
import { RemoveWatchlistItem } from "../redux-store/watchlistSlice";

const WatchList = () => {
    const [toggleWatchList, settoggleWatchList] = useState(false);
    const watchListMovies = useSelector(store => store.watchlist.movielist)  // used in watchlistmoviecard
    const [selectIds ,setSelectIds] = useState([]); // used in watchlistmoviecard
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("toggleWatchList", toggleWatchList) 
        console.log("selectIds",selectIds)
        settoggleWatchList(!toggleWatchList)
    }
    const handleRemove = () => {
        
        if (selectIds.length === 0) return;
        dispatch(RemoveWatchlistItem(selectIds))
        setSelectIds([]); 
  };

    return (
        <div className="w-screen h-screen bg-black/90 ">
            <div className=" text-white pt-30 md:pb-12 md:px-20 w-screen flex md:items-center justify-between p-4">
                <h1 className="text-4xl md:text-6xl font-bold ">Watchlist</h1>
                <div className=" flex gap-2 ">
                    <div onClick={handleClick}
                        className=" px-3.5 py-2 md:flex cursor-pointer font-bold items-center gap-1 text-white hover:text-white text-lg border-1 border-white/40 rounded-xl">
                        {toggleWatchList ? "Cancel" : "Edit Watchlist"}
                    </div>
                    {
                        toggleWatchList && <div 
                        onClick= {handleRemove}
                            className="self-center bg-red-600 hover:bg-red-700 w-fit h-fit px-3 py-2 md:flex cursor-pointer font-bold items-center gap-1 text-black text-lg  rounded-xl">
                            Remove
                        </div>
                    }
                </div>

            </div>

            { (watchListMovies.length !== 0)  ? 
                <WishlistMoiveCard 
                    movies={watchListMovies}  
                    toggleWatchList={toggleWatchList} 
                    selectIds={selectIds}
                    setSelectIds={setSelectIds} /> :  
                <div 
                    className="pt-12 md:pt-6 h-[100vh] px-4 md:px-20 font-medium text-white">
                    <h2 className="text-4xl font-bold ">Add Stuff To Your Watchlist</h2>
                    <p className="text-white/60 py-3"> Your Watchlist is empty. Any Movie can be added to your Watchlist.</p>
                </div>   
        }


        </div>
    )

}

export default WatchList;