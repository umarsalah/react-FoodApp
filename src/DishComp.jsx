import React from "react";

import dishes from "./data";

export const DishComponent = ({ min, max, category }) => {
  const dishesList = dishes
    .filter((dish) =>
      category === "all" ? category : category === dish.category
    )
    .filter((dish) => dish.price >= min && dish.price <= max);

  return (
    <ul className="grid">
      {dishesList.length > 0 ? (
        dishesList.map((dish) => (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            {dish.description ? (
              <p>{dish.description}</p>
            ) : (
              <p>No description found</p>
            )}
            <div>{dish.price} $</div>
          </li>
        ))
      ) : (
        <li className="card">No results found</li>
      )}
    </ul>
  );
};
