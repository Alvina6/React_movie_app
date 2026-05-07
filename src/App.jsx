import React from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Favourites from "../pages/favourites";
import Navbar from "./components/NabBar";
import "./css/App.css";
import { MoviesProvider } from "./context/moviesContext";

const App = () => {
  return (
    <MoviesProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
    </MoviesProvider>
  );
};

export default App;
