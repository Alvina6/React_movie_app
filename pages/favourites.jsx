import React from "react";
import "../src/css/Favorite.css";
import { useMoviesContext } from "../src/context/moviesContext";
import Movie_card from "../src/components/Movie_card";

const favourites = () => {
  const { favs } = useMoviesContext();

  if (favs) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favs.map((movie) => (
            <Movie_card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>No Favorite Movies </h2>
      <p>start adding movies to your favarites and they will appear here!</p>
    </div>
  );
};

export default favourites;
