import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Navbar.css"

function NavBar() {
  const { favorites } = useMovieContext();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🎬 Movie App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          🏠 Home
        </Link>
        <Link to="/Favorites" className="nav-link favorites-link">
          ❤️ Favorites
          <span className="favorites-count">{favorites.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
