import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects = [] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
