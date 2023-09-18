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

  it("should display error when email input is empty and submit button is pressed", async () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "");
    fireEvent.press(submitButton);
    const errorMessage = screen.findByText("Champ email requis");
    expect(await errorMessage).toBeOnTheScreen();
  });

  it("should display error when password input is empty, email input is filled and submit button is pressed", async () => {
    const submitButton = screen.getByLabelText("Valider l'inscription");
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "test@email.com");
    fireEvent.changeText(passwordInput, "");
    fireEvent.press(submitButton);
    const errorMessage = screen.findByText("Champ mot de passe requis");
    expect(await errorMessage).toBeOnTheScreen();
  });

  it("should display error when both nom and prénom inputs are empty, other fields are filled and submit button is pressed", async () => {
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
    fireEvent.press(submitButton);
    const errorMessage = screen.findByText("Champs nom et prénom requis");
    expect(await errorMessage).toBeOnTheScreen();
  });
});

describe("Register screen form behaviour on valid submission test suite", () => {
  beforeEach(() => {
    render(<App />);
    const loginButton = screen.getByText("login");
    fireEvent.press(loginButton);
    const subscribeText = screen.getByText("inscrivez", { exact: false });
    fireEvent.press(subscribeText);
  });

  it("should redirect to Account Screen when button is pressed and all required inputs are filled", async () => {
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
    const accountScreen = screen.findByText(
      "Réglages profil",
      { exact: false },
      { timeout: 4000 },
    );
    expect(await accountScreen).toBeOnTheScreen();
  });

  it("should send form data to 'exposantes' table when clicking on submit button", async () => {
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

    const lastName = "Noël";
    const firstName = "Père";
    const email = "santa@hoho.com";
    const password = "leslutinsmalins";
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(firstNameInput, firstName);
    fireEvent.changeText(lastNameInput, lastName);
    fireEvent.press(submitButton);

    const confirmationText = screen.findByText("compte créé", { exact: false });
    expect(await confirmationText).toBeOnTheScreen();
  });
});
