
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";
import "./App.css";

function App() {
  const movie = movies[0];

  return (
    <main className="app">
      <h1>Movie Browser</h1>
      <p>My first movie card in React</p>

      <MovieCard movie={movie} />
    </main>
  );
}

export default App;
