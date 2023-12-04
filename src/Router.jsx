import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Components/Home-Page/HomePage.jsx";
import Shop from "./Components/Shop-Page/Shop.jsx";
import Cart from "./Components/Cart-Page/Cart.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/shop", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
