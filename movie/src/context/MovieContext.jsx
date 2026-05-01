// context/MovieContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
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

        setMoviesData(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getData();
  }, []);

  const value = {
    moviesData,

    setMoviesData,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
