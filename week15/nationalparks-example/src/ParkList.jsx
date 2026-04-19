import ParkCard from "./ParkCard";

export default function ParkList({ parks }) {
  return (
    <div className="park-list">
      {parks.map((park) => (
        <ParkCard key={park.name} park={park} />
      ))}
    </div>
  );
}
