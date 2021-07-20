import React, { useState } from "react";

function ListingCard({ description, image, location, onDelete }) {
  const [liked, setLiked] = useState(false)

  const handleFav = () => {
    setLiked(!liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$1</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
        onClick={handleFav} 
        className={liked ? "emoji-button favorite active" : "emoji-button favorite"}
        >{liked ? "★" : "☆"}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
