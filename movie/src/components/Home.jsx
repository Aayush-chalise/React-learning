import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  async function getData() {
    try {
      const url = "https://api.themoviedb.org/3/discover/movie";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDY0Y2IxM2RmZTljZDViZGEwMTkxM2FiZWI2ZDA2NyIsIm5iZiI6MTc3NzYxNzY1Ni4xNiwic3ViIjoiNjlmNDRhZjg5MzM0NGQ3OGFhZjlmYWE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nawxlT2Q2JrWV-PKpgIH44bPZM3sS8rXtsXOGxkPPsY",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data.results);
      // .then((res) => res.json())
      // .then((json) => console.log(json))
      // .catch((err) => console.error(err));
      setMovieData(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  console.log(movieData);

  return (
    <div className="font-inter">
      {/* <h2>Latest Movies</h2> */}
      {/* <MovieCard movies={movieData} /> */}
      <div>
        <h1 className="mb-5 text-center font-bold text-2xl">Movies</h1>
        <div className="grid grid-cols-5 gap-4">
          {movieData.map((movie) => {
            return (
              <div className="w-80 h-[600px] bg-gray-200 border gap-2 p-2">
                <h1 className="text-center font-semibold text-xl">
                  Title:{movie.title}
                </h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                ></img>
                <p className="mt-3">Description:{movie.overview}</p>
                <p className="mt-2">isAdult:{movie.adult}</p>
                <p>language: {movie.original_language}</p>
                <span>Popularity: {movie.popularity}</span>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={getData}>Get Movies</button>
    </div>
  );
};

export default Home;
