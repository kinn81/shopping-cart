import styles from "./Shop.module.css";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const [cartArray, setCartArray] = useOutletContext();

  useEffect(() => {
    if (items) {
      return;
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setItems(response);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles["Shop"]}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const itemCartQty = (i) => {
    let existingItemIndex = cartArray.findIndex((item) => item.id === i.id);
    if (existingItemIndex >= 0) {
      return cartArray[existingItemIndex].count;
    }
  };

  return (
    <div className={styles["Shop"]}>
      <p>Lets shop!</p>
      <div id={styles["item-container"]}>
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              description={item.title}
              imageUrl={item.image}
              cartArray={cartArray}
              setCartArray={setCartArray}
              initialQty={itemCartQty(item) ? itemCartQty(item) : item.count}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
