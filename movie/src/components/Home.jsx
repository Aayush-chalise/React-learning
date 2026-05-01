import React from "react";
import MovieCard from "./MovieCard";
import { useState, useContext } from "react";
import MovieContainer from "./MovieContainer";
import { MovieContext } from "../context/MovieContext";

const Home = () => {
  const { moviesData, setMoviesData } = useContext(MovieContext);

  return (
    <div className="font-inter">
      <MovieContainer movies={moviesData} />
    </div>
  );
};

export default Home;
