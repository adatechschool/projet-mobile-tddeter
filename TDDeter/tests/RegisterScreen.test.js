import RegisterScreen from "../Screens/RegisterScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("registerSCreen test suite", () => {
  it("should display email input", () => {
    render(<RegisterScreen />);
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    expect(emailInput).toBeOnTheScreen();
  });
  it("should display password input", () => {
    render(<RegisterScreen />);
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    expect(passwordInput).toBeOnTheScreen();
  });
});
