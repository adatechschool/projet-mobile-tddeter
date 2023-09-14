import RegisterScreen from "../Screens/RegisterScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("registerSCreen test suite", () => {
  beforeEach(() => {
    render(<RegisterScreen />);
  });
  it("should display email input", () => {
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    expect(emailInput).toBeOnTheScreen();
  });
  it("should display password input", () => {
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    expect(passwordInput).toBeOnTheScreen();
  });
  it("should display name input", () => {
    const nameInput = screen.getByPlaceholderText("nom", {
      exact: false,
    });
    expect(nameInput).toBeOnTheScreen();
  });
});
