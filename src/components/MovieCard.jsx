import { Link } from "react-router-dom";

function MovieCard({ movie, favorites, toggleFavorite }) {
  const isFavorite = favorites.some(
    (favorite) => favorite.id === movie.id
  );

  return (
    <article className="movie-card">
      <div className="poster-container">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={movie.poster}
            alt={`${movie.title} movie poster`}
            className="movie-poster"
            loading="lazy"
          />
        </Link>

        <span className="rating-badge">
          ★ {movie.rating}
        </span>
      </div>

      <div className="movie-info">
        <span className="movie-genre">{movie.genre}</span>

        <h2>
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </h2>

        <p className="movie-year">{movie.year}</p>

        <p className="movie-description">
          {movie.description}
        </p>

        <button
          className="favorite-button"
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorite ? "♥ Remove Favorite" : "♡ Add to Favorites"}
        </button>
      </div>
    </article>
  );
}

export default MovieCard;