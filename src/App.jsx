import "./App.css";
import NavigationBar from "./Components/Navigation-Bar/NavigationBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartArray, setCartArray] = useState([]);

  return (
    <div id="main-canvas">
      <NavigationBar cartArray={cartArray} setCartArray={setCartArray} />
      <Outlet context={[cartArray, setCartArray]} />
    </div>
  );
}

export default App;
