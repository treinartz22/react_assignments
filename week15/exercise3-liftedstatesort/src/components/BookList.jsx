import BookCard from "./BookCard.jsx";

import { useState } from "react";

function BookList({ books = [] }) {
  // State lifted to parent so we can control which card is open.
  // Stores the ID of the currently open book. null = no card open
  const [openBookId, setOpenBookId] = useState(null);

  // Toggle function called by a child BookCard
  const handleToggle = (id) => {
    // If the clicked card is already open, close it
    // Otherwise, open the clicked card and close any other
    setOpenBookId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          // Controlled prop: only true if this card's id matches the open one
          //compares two values and sends the result (true/false) down as a prop
          isOpen={openBookId === book.id}
          // Pass toggle function specific to this card
          onToggle={() => handleToggle(book.id)}
        />
      ))}
    </div>
  );
}

export default BookList;
