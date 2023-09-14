import RegisterScreen from "../Screens/RegisterScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";

describe("registerScreen test suite", () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <RegisterScreen />
      </NavigationContainer>,
    );
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

  it("should display error when email input is empty and submit button is pressed", () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "");
    expect(() => {
      fireEvent.press(submitButton);
    }).toThrow("Champ email requis");
  });

  it("should display error when password input is empty, email input is filled and submit button is pressed", () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "test@email.com");
    fireEvent.changeText(passwordInput, "");
    expect(() => {
      fireEvent.press(submitButton);
    }).toThrow("Champ mot de passe requis");
  });

  it("should display error when both nom and prénom inputs are empty, other fields are filled and submit button is pressed", () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    const firstNameInput = screen.getByPlaceholderText("Votre prénom", {
      exact: false,
    });
    const lastNameInput = screen.getByPlaceholderText("Votre nom", {
      exact: false,
    });
    fireEvent.changeText(emailInput, "test@email.com");
    fireEvent.changeText(passwordInput, "1234");
    fireEvent.changeText(firstNameInput, "");
    fireEvent.changeText(lastNameInput, "");
    expect(() => {
      fireEvent.press(submitButton);
    }).toThrow("Champ nom ou prénom requis");
  });
});

describe("Redirection to Account Screen test suite", () => {
  it("should redirect to Account Screen when button is pressed and all required inputs are filled", () => {
    render(<App />);
    const loginButton = screen.getByText("login");
    fireEvent.press(loginButton);
    const subscribeText = screen.getByText("inscrivez", { exact: false });
    fireEvent.press(subscribeText);
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    const firstNameInput = screen.getByPlaceholderText("Votre prénom", {
      exact: false,
    });
    const lastNameInput = screen.getByPlaceholderText("Votre nom", {
      exact: false,
    });
    fireEvent.changeText(emailInput, "test@mail.com");
    fireEvent.changeText(passwordInput, "1234");
    fireEvent.changeText(firstNameInput, "Bob");
    fireEvent.changeText(lastNameInput, "le Bricoleur");
    const submitButton = screen.getByLabelText("Valider l'inscription");
    fireEvent.press(submitButton);
    const accountScreen = screen.getByText("Réglages profil");
    expect(accountScreen).toBeOnTheScreen();
  });
});
