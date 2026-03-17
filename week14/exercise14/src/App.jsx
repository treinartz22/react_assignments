import "./css/app.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage.jsx";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <h2>Hello World!</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookspage" element={<BooksPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
