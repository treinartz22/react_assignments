function BookCard({ title, author, image, link, description }) {
  return (
    <article className="book-card">
      <header>Here are my books.</header>
      <h4>{title}</h4> written by {author}
      <img src={image} alt={title} className="book-image" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        More Here
      </a>
      <p>{description}</p>
    </article>
  );
}
export default BookCard;
