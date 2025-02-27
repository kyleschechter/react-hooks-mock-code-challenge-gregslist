import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const url = "http://localhost:6001/listings"
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter(list => {
    if (search === "") return true

    return list.description.toLowerCase().includes(search.toLowerCase())
  })

  let sortedListings
  if (sorted) {
    sortedListings = filteredListings.sort((a, b) => a.location.localeCompare(b.location))
  } else {
    sortedListings = filteredListings
  }

  const handleSortClick = () => setSorted(!sorted)

  const listingFormSubmit = (newList) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: newList.description,
        image: newList.image,
        location: newList.location
      })
    }
    fetch(url, configObj)
    .then(r => r.json())
    .then(data => setListings([...listings, data]))
  }

  const handleDeleteListing = (listID) => {
    fetch(`${url}/${listID}`, { method: "DELETE" })
    .then(() => {
      const newList = listings.filter(list => list.id !== listID)
      setListings(newList)
    })
  }

  return (
    <div className="app">
      <Header setSearch={setSearch} handleSortClick={handleSortClick}/>
      <br />
      <NewListingForm listingFormSubmit={listingFormSubmit}/>
      <ListingsContainer handleDelete={handleDeleteListing} listings={sortedListings} />
    </div>
  );
}

export default App;
