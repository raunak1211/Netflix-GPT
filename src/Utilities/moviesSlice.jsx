import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTralier:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTralier} = moviesSlice.actions;

export default moviesSlice.reducer;