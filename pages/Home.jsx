
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

function Home() {
  return (
    <section>
      <h1>Discover Movies</h1>
      <p>Explore our collection of movies.</p>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default Home;
