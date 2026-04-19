import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";
import { useState } from "react";
function Home() {
  const [sortByRating, setSortByRating] = useState(false);
  //const limitedBooks = books.slice(0, 5);
  //const ratedBooks = books.filter((book) => book.rating > 1);

  //we can just sort the books once and pass that sorted
  //const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);  without a button to toggle,
  const displayedBooks = sortByRating
    ? [...books].sort((a, b) => b.rating - a.rating)
    : books;
  return (
    <div>
      <div className="header">
        <h2>Home Page</h2>
        <div className="header__actions">
          <button onClick={() => setSortByRating(!sortByRating)}>
            Sort by Rating
          </button>
        </div>
      </div>
      <BookList books={displayedBooks} />
    </div>
  );
}

export default Home;
