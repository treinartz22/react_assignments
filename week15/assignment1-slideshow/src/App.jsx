import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Gallery from "./pages/Gallery";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectspage" element={<ProjectsPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
