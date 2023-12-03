import "./Shop.css";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const [cartArray, setCartArray] = useOutletContext();

  useEffect(() => {
    if (items) return;
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setItems(response);
        console.log(response);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="Shop">
      <p>Lets shop!</p>
      <div id="item-container">
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              description={item.title}
              imageUrl={item.image}
              cartArray={cartArray}
              setCartArray={setCartArray}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
