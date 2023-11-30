import "./Item.css";
import React, { useState } from "react";

function Item({
  id,
  name,
  description,
  imageUrl,
  initialCount = 0,
  addToCartCallbk,
}) {
  const [count, setCount] = useState(initialCount);

  const downCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const upCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div id="item">
      <div id="item-image"></div>
      <div id="item-detail">
        <div id="item-description">{description}</div>
        <div id="increment-decrement">
          <div id="counters">
            <button onClick={downCount}>-</button>
            <div>{count}</div>
            <button onClick={upCount}>+</button>
          </div>
          <button id="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
