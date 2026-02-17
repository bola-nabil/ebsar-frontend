import { render, screen, } from "@testing-library/react";
import Dashboard from "pages/dashboard/Dashboard";

test("renders Dashboard text", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});
