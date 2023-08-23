import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleInCart() {
    setInCart(inCart => !inCart);
  }
  const textOnButton = inCart ? "Remove from Cart" : "Add to Cart";
  const liClassName = inCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart}>
        {textOnButton}
      </button>
    </li>
  );
}

export default Item;
