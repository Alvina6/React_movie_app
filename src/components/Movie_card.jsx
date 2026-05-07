import React from "react";
import { VscHeart } from "react-icons/vsc";
import "../css/MovieCard.css";
import { useMoviesContext } from "../context/moviesContext";

const Movie_card = ({ movie }) => {
  const { addFav, removeFav, isFav } = useMoviesContext();

  const favorite = isFav(movie.id);

  const onFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFav(movie.id);
    } else {
      addFav(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="{movie.title}"
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            <VscHeart />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Movie_card;
