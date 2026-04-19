import BookCard from "./BookCard.jsx";
import { books } from "../data/bookData.js";

function BookList({ limit }) {
  const limitBooks = limit ? books.slice(0, limit) : books;

  return (
    <div className="book-grid">
      {limitBooks.map((book) => (
        <BookCard
          key={book.id} // Unique key for React reconciliation
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
