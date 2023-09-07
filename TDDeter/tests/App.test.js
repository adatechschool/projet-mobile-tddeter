import { render, screen } from "@testing-library/react-native";
import App from "../App";

describe("Test test suite", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
  it("should be false", () => {
    expect(false).toBe(false);
  });
});

describe("App test suite", () => {
  beforeEach(() => {
    render(<App />);
  });
  
  it("should render navbar", () => {
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeOnTheScreen();
  });

  it("should render footer", () => {
    const footer = screen.getByLabelText("footer");
    expect(footer).toBeOnTheScreen();
  });
});
