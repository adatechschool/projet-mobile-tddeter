import LoginScreen from "../Screens/LoginScreen";
import { render, screen } from "@testing-library/react-native";

describe("LoginScreen test suite", () => {
  it("should render LoginScreen", () => {
    render(<LoginScreen />);
    const loginScreen = screen.getByText("Login Screen");
    expect(loginScreen).toBeOnTheScreen();
  });

  it("should display email input", () => {
    render(<LoginScreen />);
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    expect(emailInput).toBeOnTheScreen();
  });
  
  it("should display password input", () => {
    render(<LoginScreen />);
    const passwordInput = screen.getByPlaceholderText("passe", { exact: false });  
    expect(passwordInput).toBeOnTheScreen();
  })
});
