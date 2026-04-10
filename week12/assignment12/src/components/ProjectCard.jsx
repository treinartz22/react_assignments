function ProjectCard({ title, author, image, link, description }) {
  return (
    <article className="project-card">
      <h4>{title}</h4> written by {author}
      <img src={image} alt={title} className="project-image" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        More Here
      </a>
      <p>{description}</p>
    </article>
  );
}
export default ProjectCard;
