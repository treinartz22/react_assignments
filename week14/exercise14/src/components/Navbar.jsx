import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Book Collection</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/bookspage">BooksPage</Link>
    </nav>
  );
}
export default Navbar;
