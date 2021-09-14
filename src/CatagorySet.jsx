import React from "react";

export const CatagorySet = ({categories,category,setCategory}) => (
    <fieldset>
    <legend>Category</legend>
    {categories.map(cat => (
      <label htmlFor={cat} key={cat}>
        {cat}
        <input
          type="radio"
          name="categories"
          id={cat}
          value={cat}
          checked={cat === category}
          onChange={e => setCategory(e.target.value)}
        />
      </label>
    ))}
  </fieldset>

)