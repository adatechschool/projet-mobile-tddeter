import RegisterScreen from "../Screens/RegisterScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import LoginButton from "../Components/LoginButton";

describe("registerScreen test suite", () => {
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
  it("should display lastname input", () => {
    const lastnameInput = screen.getByPlaceholderText("Votre nom", {
      exact: false,
    });
    expect(lastnameInput).toBeOnTheScreen();
  });
  it("should display firstname input", () => {
    const firstnameInput = screen.getByPlaceholderText("Votre prénom", {
      exact: false,
    });
    expect(firstnameInput).toBeOnTheScreen();
  });
  it("should display a submit button", () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    expect(submitButton).toBeOnTheScreen();
  });
});

describe("Redirection to Account Screen test suite", () => {
  it("should redirect to Account Screen when button is pressed", () => {
    render(<App />);
    const loginButton = screen.getByText("login");
    fireEvent.press(loginButton);
    const subscribeText = screen.getByText("inscrivez", { exact: false });
    fireEvent.press(subscribeText);
    const submitButton = screen.getByLabelText("Valider l'inscription");
    fireEvent.press(submitButton);
    const accountScreen = screen.getByText("Réglages profil");
    expect(accountScreen).toBeOnTheScreen();
  });
});
