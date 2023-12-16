import React, { useRef } from "react";
import { language } from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/Constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchContent = useRef(null);
 const searchMovieTMDB = async (movies) => {
    const data = fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    const gptQuery =
    "Act as a movie recommendation system and suggest some movies for the query:" +
    searchContent.current.value +
    "only give me names of 5 movies with comma seperated without any numbering like the example result given ahead. Example result:gadar,sholay,don,golmaal,koi mil gaya";
     
      const gptSearchResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptSearchResult.choices?.[0]?.message?.content);
      const gptMovies =
        gptSearchResult.choices?.[0]?.message.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
  };
  
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="  bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchContent}
          className=" col-span-9 p-4 m-4"
          type="text"
          placeholder={language[langKey].searchPlaceholder}
        />
        <button
          className=" col-span-3 px-2 py-4 m-4 bg-red-600 text-black rounded-lg"
          onClick={handleGptSearch}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
