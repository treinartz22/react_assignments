import "./css/app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
