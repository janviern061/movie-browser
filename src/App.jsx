import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(movie) {
    const isFavorite = favorites.some(
      (favorite) => favorite.id === movie.id
    );

    if (isFavorite) {
      setFavorites(
        favorites.filter((favorite) => favorite.id !== movie.id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  return (
    <Routes>
      <Route
  path="/"
  element={<Layout favoritesCount={favorites.length} />}
>
        <Route
          index
          element={
            <Home
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route path="movies/:id" element={<MovieDetail />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;