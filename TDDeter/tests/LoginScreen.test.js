import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";

describe("LoginScreen test suite", () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    );
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

  it("should display error when email input is empty and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "");
    expect(() => {
      fireEvent.press(submitButton);
    }).toThrow("Champ email requis");
  });

  it("should not throw an error when email input is filled and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(emailInput, "test@mail.com");
    expect(() => {
      fireEvent.press(submitButton);
    }).not.toThrow("Champ email requis");
  });

  it("should display error when password input is empty and email is filled and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    fireEvent.changeText(passwordInput, "");
    fireEvent.changeText(emailInput, "bonjour@gmail.com");
    expect(() => {
      fireEvent.press(submitButton);
    }).toThrow("Champ mot de passe requis");
  });

  it("should display a pressable for registration", () => {
    const registrationText = screen.getByText("inscrivez", { exact: false });
    expect(registrationText).toBeOnTheScreen();
  });
});

describe("Submitted Login Form test suite", () => {
  beforeEach(() => {
    render(<App />);
    const loginButton = screen.queryByText("login");
    fireEvent.press(loginButton);
  });

  it("should not throw an error when email and password input are filled and submit button is pressed", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    fireEvent.changeText(emailInput, "test@mail.com");
    fireEvent.changeText(passwordInput, "password123");
    expect(() => {
      fireEvent.press(submitButton);
    }).not.toThrow("Champ mot de passe requis");
  });

  it("should redirect to Home screen when submit button is pressed with no errors", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    fireEvent.changeText(emailInput, "test@mail.com");
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.press(submitButton);
    const HomeScreen = screen.getByText("Home Screen");
    expect(HomeScreen).toBeOnTheScreen();
  });

  it("should redirect to HomeScreen when submit button is pressed and display a welcome message", () => {
    const submitButton = screen.getByText("connecter", { exact: false });
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    const passwordInput = screen.getByPlaceholderText("passe", {
      exact: false,
    });
    fireEvent.changeText(emailInput, "test@mail.com");
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.press(submitButton);
    const welcomeMessage = screen.getByText("Bonjour", { exact: false });
    expect(welcomeMessage).toBeOnTheScreen();
  });
});
