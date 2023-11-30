import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div id="NavigationBar">
      <div id="leftLinks">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div id="rightLinks">
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
