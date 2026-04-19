import ImageSlideShow from "../components/ImageSlideShow";
import { projects } from "../data/projectData";

function Gallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <ImageSlideShow projects={projects} />
    </div>
  );
}

export default Gallery;
