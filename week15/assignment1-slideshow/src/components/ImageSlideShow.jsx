import { useState } from "react";

function ImageSlideshow({ projects = [] }) {
  const [index, setIndex] = useState(0);

  if (projects.length === 0) return null;

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }

  function handleNext() {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }

  const current = projects[index];

  return (
    <div className="slideshow">
      <img
        src={current.image}
        alt={current.title}
        className="slideshow__image"
      />

      <h3>{current.title}</h3>

      <div className="slideshow__controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlideshow;
