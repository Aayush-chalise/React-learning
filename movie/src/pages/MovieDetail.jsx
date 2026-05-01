import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const IMG = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const fmt = (n) => (n ? `$${n.toLocaleString()}` : "N/A");

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDY0Y2IxM2RmZTljZDViZGEwMTkxM2FiZWI2ZDA2NyIsIm5iZiI6MTc3NzYxNzY1Ni4xNiwic3ViIjoiNjlmNDRhZjg5MzM0NGQ3OGFhZjlmYWE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nawxlT2Q2JrWV-PKpgIH44bPZM3sS8rXtsXOGxkPPsY",
      },
    })
      .then((r) => r.json())
      .then(setMovie)
      .catch(console.error);
  }, [id]);

  if (!movie)
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Movie not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white  font-mono">
      <div className="relative h-80 overflow-hidden">
        <img
          src={IMG(movie.backdrop_path, "original")}
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0   from-transparent to-gray-950" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 px-4 py-2 bg-white/10 hover:bg-red-900/40 rounded text-sm transition-colors"
        >
          ← Back
        </button>
        <div className="absolute bottom-6 left-8">
          {movie.tagline && (
            <p className="text-red-400 text-xs tracking-widest uppercase mb-1">
              {movie.tagline}
            </p>
          )}
          <h1 className="text-5xl font-black">{movie.title}</h1>
          <div className="flex gap-2 mt-2 flex-wrap">
            {[
              movie.release_date?.slice(0, 4),
              `Stars: ${movie.vote_average?.toFixed(1)}`,
              movie.runtime && `${movie.runtime} min`,
              movie.status,
            ]
              .filter(Boolean)
              .map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {b}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-8 mt-8 grid md:grid-cols-[200px_1fr] gap-8">
        <img
          src={IMG(movie.poster_path)}
          className="rounded-xl shadow-2xl hidden md:block"
        />

        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((g) => (
              <span
                key={g.id}
                className="text-xs text-red-300 bg-red-950/40 border border-red-800/30 px-3 py-1 rounded-full"
              >
                {g.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ["Budget", fmt(movie.budget)],
              ["Revenue", fmt(movie.revenue)],
              ["Votes", movie.vote_count?.toLocaleString()],
              ["Popularity", movie.popularity?.toFixed(1)],
            ].map(([label, val]) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
              >
                <p className="text-[10px] tracking-widest uppercase text-gray-500">
                  {label}
                </p>
                <p className="text-sm font-medium mt-1">{val}</p>
              </div>
            ))}
          </div>

          {/* Companies & Countries */}
          {[
            [
              "Production Companies",
              movie.production_companies?.map((c) => c.name),
            ],
            ["Countries", movie.production_countries?.map((c) => c.name)],
          ].map(
            ([label, items]) =>
              items?.length > 0 && (
                <div key={label}>
                  <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((name) => (
                      <span
                        key={name}
                        className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
