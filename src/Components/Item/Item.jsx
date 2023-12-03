import "./Item.css";
import { useState, useEffect } from "react";

function Item({ itemObj, cartArray, setCartArray, initialQty = 0 }) {
  const [count, setCount] = useState(initialQty);

  const updateCartQty = (qty) => {
    //RETURN if user reduces qty below zero
    if (qty < 0) {
      return;
    }

    // Find the item in the cart
    let existingItemIndex = cartArray.findIndex(
      (item) => item.id === itemObj.id
    );

    //Delete the item from the cart array if the qty becomes zero
    if (qty === 0 && existingItemIndex >= 0) {
      setCount(qty);
      setCartArray(cartArray.filter((_, index) => index !== existingItemIndex));
      return;
    }

    //Item is in the cart, user changed qty != 0
    if (existingItemIndex >= 0) {
      // Item exists, update it
      const updatedCart = cartArray.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, count: qty };
        }
        return item;
      });
      setCartArray(updatedCart);
    } else {
      // Item doesn't exist, add it
      const newItem = {
        ...itemObj,
        count: qty,
      };
      setCartArray([...cartArray, newItem]);
    }
    setCount(qty);
  };

  return (
    <div id="item">
      <div id="item-image">
        {itemObj.image && <img src={itemObj.image} alt={itemObj.title} />}
      </div>
      <div id="item-detail">
        <div id="item-description">{itemObj.title}</div>
        <div id="increment-decrement">
          <div>Add to Cart</div>
          <div id="counters">
            <button onClick={() => updateCartQty(count - 1)}>-</button>
            <div>{count}</div>
            <button onClick={() => updateCartQty(count + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
