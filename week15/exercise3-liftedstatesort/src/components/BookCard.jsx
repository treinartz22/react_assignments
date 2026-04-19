function BookCard({
  title,
  author,
  description,
  url,
  image,
  isOpen,
  onToggle,
}) {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-card__image" />
      <h2 className="book-card__title">{title}</h2>
      <h3 className="book-card__author">{author}</h3>
      {/*onToggle when this button is clicked, run the onToggle function in BookList.
      Parent updates state (openBookId) and the Component re-renders  */}
      <button onClick={onToggle} className="book-card__button">
        {/*isOpen decides what text to display */}
        {isOpen ? "Hide Description" : "Show Description"}
      </button>
      <div
        className={`book-card__description-container ${isOpen ? "open" : ""}`}
      >
        <p className="book-card__description">{description}</p>
      </div>
      <br />
      <a href={url} className="book-card__link">
        Visit Project
      </a>
    </div>
  );
}

export default BookCard;
