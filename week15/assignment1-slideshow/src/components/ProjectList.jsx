import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects = [] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id} // Unique key for React reconciliation
          {...project}
        />
      ))}
    </div>
  );
}

// Export component for use in other parts of the app
export default ProjectList;
