import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projectData.js";
function ProjectList() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          author={project.author}
          image={project.image}
          link={project.link}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;
