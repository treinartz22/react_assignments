import { useState } from "react";

function BookCard({ author, title, description, image }) {
  const [isRead, setIsRead] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleReadStatus = () => {
    setIsRead(!isRead);
  };
  function toggleDescription() {
    setShowDescription((prev) => !prev);
  }
  return (
    <article className="book-card">
      <header>
        <h2>{title}</h2>
        <p className="book-author">by {author}</p>
      </header>
      <img src={image} alt={`${title} cover`} className="book-image" />
      <div className="book-actions">
        <button onClick={toggleReadStatus}>
          {isRead ? "Mark as Unread" : "Mark as Read"}
        </button>

        <button onClick={toggleDescription}>
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
      </div>

      {showDescription && <p className="book-description">{description}</p>}
    </article>
  );
}
export default BookCard;
