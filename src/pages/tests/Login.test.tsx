import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Render component login", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});

test("Shows validation errors when enter email or password is incorrect.", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "quoc@gmail.com" },
  });

  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "quoc" },
  });

  fireEvent.click(screen.getByText("Login"));

  expect(
    await screen.findByText(/Email or password is incorrect./i)
  ).toBeInTheDocument();
});

test("Login successfully", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "employee@gmail.com" },
  });

  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "employee" },
  });

  fireEvent.click(screen.getByText("Login"));

  await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/home");
  });
});
