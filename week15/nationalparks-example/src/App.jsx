import ParkList from "./ParkList";
import { parks } from "./data";
import "./css/app.css";

export default function App() {
  return (
    <div className="app">
      <h1>National Parks</h1>
      <ParkList parks={parks} />
    </div>
  );
}
