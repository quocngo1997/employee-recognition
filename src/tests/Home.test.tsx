import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home";

test("Render component employee home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Employee Home Page/i)).toBeInTheDocument();
  expect(screen.getByText(/Recognize employee/i)).toBeInTheDocument();
});
