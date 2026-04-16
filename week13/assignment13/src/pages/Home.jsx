import ProjectList from "../components/ProjectList.jsx";
import { projects } from "../data/projectData.js";
function Home() {
  const limitedProjects = projects.slice(0, 3); // Get the first 4 projects from the array
  return <ProjectList projects={limitedProjects} />;
}
export default Home;
