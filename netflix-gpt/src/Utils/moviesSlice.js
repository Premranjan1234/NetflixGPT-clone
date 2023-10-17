import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
    },
    reducers:{
       addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload;
       },
       addMovieTrailer:(state,action)=>{
        state.trailerVideos=action.payload;
       }
    }
});

export const {addNowPlayingMovies,addMovieTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;