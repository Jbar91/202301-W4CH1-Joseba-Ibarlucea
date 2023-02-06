import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Given the Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render", () => {
      render(<Button />);
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
    });
  });
});
