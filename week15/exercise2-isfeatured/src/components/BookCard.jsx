// Import React hook for managing component state
import { useState } from "react";

function BookCard({ author, title, description, link, image, featured }) {
  /* =========================
     STATE
     ========================= */
  const [showDescription, setShowDescription] = useState(false);

  /* =========================
     EVENT HANDLER
     ========================= */
  function toggleDescription() {
    setShowDescription((prev) => !prev); // Flip true/false
  }

  return (
    /* BEM Block: book-card */
    <article className="book-card">
      <header>
        {featured && <span className="book-featured">Featured</span>}

        <h2 className="book-card__title">{title}</h2>

        <p className="book-card__author">by {author}</p>
      </header>

      {/* BEM Element: image */}
      <img src={image} alt={`${title} cover`} className="book-card__image" />

      {/* BEM Element: link (external resource) */}
      <a
        href={link}
        className="book-card__link"
        target="_blank"
        rel="noopener noreferrer" /* Security best practice for external links */
      >
        Learn More Here
      </a>

      {/* =========================
          ACTION BUTTON Toggles UI state (description visibility)
          ========================= */}
      <button className="book-card__button" onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>

      {/* =========================
          CONDITIONAL RENDERING
          Why: Only render description when needed (better UX + performance)
          ========================= */}
      {showDescription && (
        <p className="book-card__description">{description}</p>
      )}
    </article>
  );
}

// Export component for reuse
export default BookCard;
