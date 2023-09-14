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
