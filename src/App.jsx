import "./App.css";
import NavigationBar from "./Components/Navigation-Bar/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="main-canvas">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
