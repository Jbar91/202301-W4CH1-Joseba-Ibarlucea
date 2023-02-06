import { render, screen } from "@testing-library/react";
import { Info } from "./info";

describe("Given the Info component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render", () => {
      render(<Info />);
      const h1 = screen.getByRole("heading");
      expect(h1).toBeInTheDocument();
    });
  });
});
