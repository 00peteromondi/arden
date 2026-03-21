import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Luguma branding", () => {
  render(<App />);
  expect(
    screen.getAllByRole("img", {
      name: /Luguma Constructions Limited logo/i,
    }).length
  ).toBeGreaterThan(0);
});
