import BookCard from "./BookCard.jsx";
import { books } from "../data/bookData.js";

function BookList({ limit }) {
  const limitBooks = limit ? books.slice(0, limit) : books;
  // - If 'limit' is provided, slice the first N books
  // - Otherwise, use all books

  return (
    <div className="book-grid">
      {limitBooks.map((book) => (
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
