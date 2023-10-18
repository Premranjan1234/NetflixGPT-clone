import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
    },
    reducers:{
       addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload;
       },
       addMovieTrailer:(state,action)=>{
        state.trailerVideos=action.payload;
       },
       addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload;
       },
       addTrendingMovies:(state,action)=>{
        state.trendingMovies=action.payload;
       },
       addUpcomingMovies:(state,action)=>{
        state.upcomingMovies=action.payload;
       },

    }
});

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;