import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <section className="simple-page">
        <h1>Movie Not Found</h1>
        <p>Sorry, we could not find that movie.</p>
        <Link to="/">Back to Home</Link>
      </section>
    );
  }

  return (
    <section className="movie-detail">
      <img
        src={movie.poster}
        alt={movie.title}
        className="detail-poster"
      />

      <div className="detail-info">
        <span className="movie-genre">{movie.genre}</span>

        <h1>{movie.title}</h1>

        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>

        <p>{movie.description}</p>

        <Link to="/" className="back-link">
          ← Back to Movies
        </Link>
      </div>
    </section>
  );
}

export default MovieDetail;