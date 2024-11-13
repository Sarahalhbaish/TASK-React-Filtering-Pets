import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="input-group rounded">
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      onChange={(event) => {
        props(event.target.value)}}
    />
  </div>
  )
}

export default SearchBar