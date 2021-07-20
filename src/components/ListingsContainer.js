import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ handleDelete, listings }) {

  const allListings = listings.map(list => {

    const onDelete = () => {
      handleDelete(list.id)
    }
    return (
      <ListingCard 
      key={list.id}
      description={list.description}
      image={list.image}
      location={list.location}
      onDelete={onDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
