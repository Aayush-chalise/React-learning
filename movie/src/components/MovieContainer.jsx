// components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movies, title = "Popular Movies" }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="py-8">
        <h2 className="text-3xl font-bold text-white mb-8 font-inter">
          {title}
        </h2>
        <p className="text-gray-400 text-center py-12">No movies found.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-black font-inter  mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
