import { projects } from "../data/projectData.js";
import ProjectList from "../components/ProjectList.jsx";
function Home() {
  const limitedProjects = projects.slice(0, 3);
  return <ProjectList projects={limitedProjects} />;
}

export default Home;
