import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1>Discover Movies</h1>
      <p>Explore our collection of movies.</p>

      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="no-results">
            No movies found. Try another title.
          </p>
        )}
      </div>
    </section>
  );
}

export default Home;