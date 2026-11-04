import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card-link">
      <article className="movie-card">
        <div className="poster-container">
          <img
            src={movie.poster}
            alt={`${movie.title} movie poster`}
            className="movie-poster"
            loading="lazy"
          />

          <span className="rating-badge">
            ★ {movie.rating}
          </span>
        </div>

        <div className="movie-info">
          <span className="movie-genre">{movie.genre}</span>
          <h2>{movie.title}</h2>
          <p className="movie-year">{movie.year}</p>
          <p className="movie-description">{movie.description}</p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;