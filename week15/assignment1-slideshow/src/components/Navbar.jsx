import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand — title and emoji grouped on the left */}
      <div className="navbar__brand">
        <span>{"\u{1F99C}"}</span>

        <h4>Programming for the Web: Spring 2026 Projects</h4>
      </div>

      {/* Links — grouped on the right */}
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>

        <Link to="/projectspage">All Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
