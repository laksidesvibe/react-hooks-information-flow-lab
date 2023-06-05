import React from 'react'
import Item from './Item'

const Filter = ({onCategoryChange}) => {

  return (
    <div>
      <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
      </select>
    </div>
  )
}

export default Filter