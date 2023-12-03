import styles from "./Cart.module.css";
import Item from "../Item/Item";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [cartArray, setCartArray] = useOutletContext();

  return (
    <div id={styles["Cart"]}>
      <p>This is your cart:</p>
      <div id={styles["item-container"]}>
        {cartArray &&
          cartArray.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              description={item.title}
              imageUrl={item.image}
              cartArray={cartArray}
              setCartArray={setCartArray}
              initialQty={item.count}
            />
          ))}
      </div>
    </div>
  );
}

export default Cart;
