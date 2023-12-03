import "./Item.css";
import { useState, useEffect } from "react";

function Item({ itemObj, cartArray, setCartArray }) {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = itemObj.image;
    img.onload = () => {
      setImage(img);
    };
  });

  const downCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const upCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const getCountInCart = () => {
    const itemInCart = cartArray.find((item) => item.id === itemObj.id);
    return itemInCart ? itemInCart.count : 0;
  };

  const addItemToCart = () => {
    // Find the item in the cart
    let existingItemIndex = cartArray.findIndex(
      (item) => item.id === itemObj.id
    );

    if (existingItemIndex >= 0) {
      // Item exists, update it
      const updatedCart = cartArray.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, count: item.count + count };
        }
        return item;
      });
      setCartArray(updatedCart);
    } else {
      // Item doesn't exist, add it
      const newItem = {
        ...itemObj,
        count: count,
      };
      setCartArray([...cartArray, newItem]);
    }
    setCount(0);
  };

  return (
    <div id="item">
      <div id="item-image">
        {itemObj.image && <img src={itemObj.image} alt={itemObj.title} />}
      </div>
      <div id="item-detail">
        <div id="item-description">{itemObj.title}</div>
        <div id="increment-decrement">
          <div id="counters">
            <button onClick={downCount}>-</button>
            <div>{count}</div>
            <button onClick={upCount}>+</button>
          </div>
          <button id="add-to-cart" onClick={addItemToCart}>
            Add to cart
          </button>
          <div id="in-cart">In cart: {getCountInCart()}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
