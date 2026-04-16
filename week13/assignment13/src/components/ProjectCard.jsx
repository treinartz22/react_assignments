import { useState } from "react";

function ProjectCard({ author, title, description, link, image }) {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription((prev) => !prev); // Flip true/false
  }
  return (
    /* BEM Block: project-card */
    <article className="project-card">
      <header>
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__author">by {author}</p>
      </header>

      <img src={image} alt={`${title} cover`} className="project-card__image" />
      <a
        href={link}
        className="project-card__link"
        target="_blank"
        rel="noopener noreferrer" /* Security best practice for external links */
      >
        Learn More Here
      </a>
      <button className="project-card__button" onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {showDescription && (
        <p className="project-card__description">{description}</p>
      )}
    </article>
  );
}

// Export component for reuse
export default ProjectCard;
