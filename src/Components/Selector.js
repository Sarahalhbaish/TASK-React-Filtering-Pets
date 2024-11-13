import React from 'react'

const Selector = (props) => {
  return (
    <select className="form-select" onChange={(event) => {
        props(event.target.value)}}>
    <option value="" selected>
      All
    </option>
    <option value="Cat">Cat</option>
    <option value="Dog">Dog</option>
    <option value="Rabbit">Rabbit</option>
  </select>
  )
}

export default Selector