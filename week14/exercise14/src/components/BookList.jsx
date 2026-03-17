import BookCard from "./BookCard.jsx";
import { books } from "../data/bookData.js";
function BookList({ limit }) {
  const booksToShow = limit ? books.slice(0, limit) : books;
  const totalBooks = books.length;
  return (
    <div className="book-grid">
      Showing: {limit ? booksToShow.length : totalBooks} of {totalBooks} books
      and these are long books
      {booksToShow.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          link={book.link}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default BookList;
