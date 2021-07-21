import React, { useState } from "react"

const NewListingForm = ({ listingFormSubmit }) => {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    image: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    listingFormSubmit(formData)
    setFormData({
      description: "",
      location: "",
      image: ""
    })
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="description" 
      placeholder="Description..."
      value={formData.description}
      onChange={handleChange}
      />
      <input 
      type="text" 
      name="location" 
      placeholder="Location..."
      value={formData.location}
      onChange={handleChange}
      />
      <input 
      type="text" 
      name="image" 
      placeholder="Image..."
      value={formData.image}
      onChange={handleChange}
      />
      <input 
      type="submit" 
      value="Post New Listing"
      />
    </form>
  )
}

export default NewListingForm