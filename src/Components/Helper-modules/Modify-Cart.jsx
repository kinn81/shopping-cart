const addItemToCart = () => {
  // Find the item in the cart
  let existingItemIndex = cartArray.findIndex((item) => item.id === itemObj.id);

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
