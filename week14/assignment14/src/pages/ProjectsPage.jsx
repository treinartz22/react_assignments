import ProjectList from "../components/ProjectList.jsx";
import { projects } from "../data/projectData.js";
function ProjectsPage() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default ProjectsPage;
