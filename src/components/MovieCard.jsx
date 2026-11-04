
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: ⭐ {movie.rating}</p>
      </div>
    </article>
  );
}

export default MovieCard;
