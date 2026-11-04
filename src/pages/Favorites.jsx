import MovieCard from "../components/MovieCard";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <section>
      <h1>My Favorite Movies</h1>
      <p>Here are the movies you have selected.</p>

      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="simple-page">
          <h2>No Favorites Yet</h2>
          <p>
            You haven't added any movies to your favorites.
          </p>
          <p>Go to Home and select your favorite movies.</p>
        </div>
      )}
    </section>
  );
}

export default Favorites;