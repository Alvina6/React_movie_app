import { createContext, use, useContext, useEffect, useState } from "react";

const moviesContext = createContext();

export const useMoviesContext = () => useContext(moviesContext);

export const MoviesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favs");
    if (storedFavs) {
      setFavs(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const addFav = (movie) => {
    setFavs((prevFavs) => [...prevFavs, movie]);
  };

  const removeFav = (movieId) => {
    setFavs((prevFavs) => prevFavs.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favs.some((movie) => movie.id === movieId);
  };

  const value = {
    favs,
    addFav,
    removeFav,
    isFav,
  };

  return (
    <moviesContext.Provider value={value}>{children}</moviesContext.Provider>
  );
};
