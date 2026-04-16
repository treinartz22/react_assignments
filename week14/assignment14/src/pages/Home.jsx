import ProjectList from "../components/ProjectList.jsx";
import { projects } from "../data/projectData.js";
function Home() {
  const limitedProjects = projects.slice(0, 3); // Get the first 3 projects for the home page
  console.log(limitedProjects);
  return <ProjectList projects={limitedProjects} />;
}
export default Home;
