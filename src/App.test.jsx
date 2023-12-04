import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

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

  /* NEED TO WORK OUT HOW TO DO THIS
  it("renders the home page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText("This is the home page")).toBeInTheDocument();
  });
  */
});
