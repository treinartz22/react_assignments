import { useState } from "react";

export default function ParkCard({ park }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isVisited, setIsVisited] = useState(false);
  return (
    <div className="park-card">
      {/* Park Image */}
      <img src={park.image} alt={park.name} className="park-image" />
      {/* Park Info Wrapper */}
      <div className="park-card__info">
        <h2 className="park-card__name">{park.name}</h2>
        <p className="park-card__state">State: {park.state}</p>
        <p className="park-card__hikes">Hikes: {park.hikes}</p>
        {/*  Featured Badge */}
        {park.isFeatured && (
          <p className="park-card__featured">Featured Park ⭐</p>
        )}
      </div>
      {/* Likes */}
      <button onClick={() => setLikes(likes + 1)}>Like 👍</button>

      {/* Toggle Description Button */}
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide" : "Show"} Description
      </button>

      {/*  Extra Details (conditional render) */}
      {showDescription && (
        <div className="park-card__details">
          <p>Wildlife: {park.wildlife.join(", ")}</p>
          <p>Entry Fees: ${park.fees}</p>
        </div>
      )}
      {/* 👣 Visit Toggle */}
      <button onClick={() => setIsVisited(!isVisited)}>Toggle Visit</button>
      <span>Visited: {isVisited ? "Yes" : "No"}</span>
      <span>Likes: {likes}</span>
    </div>
  );
}
