import { useState } from "react";

function BookCard({ author, title, description, link, image }) {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription((prev) => !prev); // Flip true/false
  }

  return (
    <article className="book-card">
      <header>
        <h2 className="book-card__title">{title}</h2>
        <p className="book-card__author">by {author}</p>
      </header>
      <img src={image} alt={`${title} cover`} className="book-card__image" />
      <a
        href={link}
        className="book-card__link"
        target="_blank"
        rel="noopener noreferrer" /* Security best practice for external links */
      >
        Learn More Here
      </a>
      <button className="book-card__button" onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>

      {showDescription && (
        <p className="book-card__description">{description}</p>
      )}
    </article>
  );
}

export default BookCard;
