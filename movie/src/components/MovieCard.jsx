import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { id, title, poster_path, overview, vote_average, release_date } =
    movie;
  console.log(id);
  const imageBaseUrl = "https://image.tmdb.org/t/p/";
  const posterUrl = poster_path
    ? `${imageBaseUrl}w342${poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Poster";

  const year = release_date ? release_date.split("-")[0] : "N/A";
  const rating = vote_average ? vote_average.toFixed(1) : "N/A";

  const handleViewDetails = (event) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="group border-black/10 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute top-3 right-3 bg-black/80 text-white text-sm font-semibold px-2.5 py-1 rounded-xl flex items-center gap-1 backdrop-blur-sm">
          {rating}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white line-clamp-2 leading-tight mb-1">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-3">{year}</p>

        {overview && (
          <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
            {overview}
          </p>
        )}

        <button
          onClick={handleViewDetails}
          className="mt-auto bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
