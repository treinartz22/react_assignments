import BookCard from "./BookCard.jsx";
import { books } from "../data/bookData.js";

function BookList({ limit }) {
  const num_books = limit ? books.slice(0, limit) : books;
  return (
    <div className="book-grid">
      {num_books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          url={book.url}
          isFeatured={book.isFeatured}
        />
      ))}
    </div>
  );
}
export default BookList;
