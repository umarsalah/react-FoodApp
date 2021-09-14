import React from "react";


export const FieldSet =({min,max,setPrice})=> (
    <fieldset>
      <legend>Price</legend>
      <input
        type="range"
        min="0.5"
        max="9"
        value={min}
        step="0.5"
        onChange={(e) => setPrice([e.target.value,max])}
      />
      <label>Min Price</label>
      <br />
      <input
        type="range"
        min="0.5"
        max="9"
        value={max}
        step="0.5"
        onChange={(e) => setPrice([min, e.target.value])}
      />
      <label>Max Price</label>
      <br />
    </fieldset>
)