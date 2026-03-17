import { useState } from "react";

function BookCard({ title, author, image, link, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="book-card">
      <header>Here are my books.</header>
      <h4>{title}</h4> written by {author}
      <img src={image} alt={title} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        More Here
      </a>
      <p className="book-description">
        {isExpanded ? description : `${description.substring(0, 100)}...`}
      </p>
      <button onClick={toggleDescription}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </article>
  );
}
export default BookCard;
