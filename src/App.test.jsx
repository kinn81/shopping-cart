import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import HomePage from "./Components/Home-Page/HomePage.jsx";
import Shop from "./Components/Shop-Page/Shop.jsx";
import Cart from "./Components/Cart-Page/Cart.jsx";

describe("App component", () => {
  it("renders the navigation bar with Home and Shop links", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText(/Cart.*0.*/)).toBeInTheDocument(); //Cart (0)
  });

  it("renders the home page", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText("This is the home page")).toBeInTheDocument();
  });

  it("navigates to the Cart page when Cart link is clicked", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );

    // Simulate a click on the Cart link in the navigation bar
    const cartLink = screen.getByText(/Cart.*0.*/);
    fireEvent.click(cartLink);

    // Check if the Cart component is rendered
    expect(screen.getByText("This is your cart:")).toBeInTheDocument();
  });
});
