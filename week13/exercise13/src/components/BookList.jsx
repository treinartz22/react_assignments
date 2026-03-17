import { books } from "../data/bookData.js";
import BookCard from "./BookCard.jsx";

function BookList({ limit }) {
  const booksToShow = limit ? books.slice(0, limit) : books;
  const totalBooks = books.length;
  const shownBooks = booksToShow.length;
  const hasMoreBooks = shownBooks < totalBooks;

  return (
    <div className="book-grid">
      <section className="book-card-header">
        <p>
          Showing {shownBooks} of {totalBooks} books
        </p>

        {hasMoreBooks && (
          <span className="more-books-hint">
            More books available on the Books page →
          </span>
        )}
      </section>

      {shownBooks === 0 && <p>There are still more books coming soon!</p>}

      {booksToShow.map((book) => (
        <BookCard
          key={book.id}
          author={book.author}
          title={book.title}
          description={book.description}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookList;
