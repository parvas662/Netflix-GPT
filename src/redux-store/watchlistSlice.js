import { createSlice } from "@reduxjs/toolkit";


const watchlistSlice = createSlice({
    name : "watchlist",
    initialState :  {
       movielist: [],
     },
    reducers : {
        addWatchListItem : (state,action)=> {
            const exists = state.movielist.some(item => item.id === action.payload.id);
            if (!exists) {
                state.movielist.push(action.payload)
            }
        },
        RemoveWatchlistItem : (state,action)=>{
            state.movielist = state.movielist.filter(
                movie => !action.payload.includes(movie.id) // assuming `movie.id` is the structure
            )
},
    }

})

export default watchlistSlice.reducer
export const {addWatchListItem,RemoveWatchlistItem} = watchlistSlice.actions;

 