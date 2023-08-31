import LoginScreen from "../Screens/LoginScreen";
import { render, screen } from "@testing-library/react-native";

describe("LoginScreen test suite", () => {
  beforeEach(() => {
    render(<LoginScreen />);
  });

  it("should render LoginScreen", () => {
    const loginScreen = screen.getByText("Login Screen");
    expect(loginScreen).toBeOnTheScreen();
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

  it("should display a submit button", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    expect(submitButton).toBeOnTheScreen();
  });
});
