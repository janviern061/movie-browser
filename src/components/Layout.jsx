
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="site-layout">
      <header className="site-header">
        <Link to="/" className="site-logo">
          Movie Browser
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Movie Browser | Learn React by building</p>
      </footer>
    </div>
  );
}

export default Layout;
