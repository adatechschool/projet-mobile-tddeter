import LoginScreen from "../Screens/LoginScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";

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

  it ("should display error when email input is empty and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput,'');
    expect(()=>{
      fireEvent.press(submitButton);
    }).toThrow("Champ email requis");
  });

  it("should not throw an error when email input is filled and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput,'test@mail.com');
    expect(()=>{
      fireEvent.press(submitButton);
    }).not.toThrow("Champ email requis");
  });
});
