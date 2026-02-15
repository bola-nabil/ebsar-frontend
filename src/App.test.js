import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Ebsar text", () => {
  render(<App />);
  const linkElement = screen.getByText("ebsar");
  expect(linkElement).toBeInTheDocument();
});
