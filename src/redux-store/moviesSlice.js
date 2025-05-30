import { createSlice } from "@reduxjs/toolkit"; 


const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies: null,
        trailerVideo : null,
        popularMovies :null,
        topRatedMovies : null,
        upComingMovies :null,
        GptMovies : null,
        videoPlayer :null,
        movieDetail :null,
        RecommendMovies :null,
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        } ,
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies :(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies : (state,action)=>{
            state.upComingMovies = action.payload;
        },
        addGptSearchResult : (state,action)=>{
            state.GptMovies = action.payload;
        },
        addVideoPlayer : (state,action)=>{
            state.videoPlayer = action.payload;
        },
        addMovieDetail : (state,action)=>{
            state.movieDetail = action.payload;
        },
        addRecommendedMovies : (state,action)=>{
            state.RecommendMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo , addPopularMovies, addTopRatedMovies, addUpComingMovies, addGptSearchResult, addVideoPlayer, addMovieDetail, addRecommendedMovies} = moviesSlice.actions;  
export default moviesSlice.reducer;