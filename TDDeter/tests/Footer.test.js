import { fireEvent, render, screen } from "@testing-library/react-native";
import Footer from "../Components/Footer";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";

describe("Footer test suite", () => {
  it("should render home button", () => {
    render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>,
    );
    const homeButton = screen.getByLabelText("accueil", { exact: false });
    expect(homeButton).toBeOnTheScreen();
  });

  it("should redirect to home screen when home button is pressed from login screen", () => {
    render(<App />);
    const loginButton = screen.getByText("login");
    fireEvent.press(loginButton);
    const homeButton = screen.getByLabelText("accueil", { exact: false });
    fireEvent.press(homeButton);
    const homeScreen = screen.getByText("Home Screen");
    expect(homeScreen).toBeOnTheScreen();
  });

  it("should render account button", () => {
    render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>,
    );
    const accountButton = screen.getByLabelText("réglages", { exact: false });
    expect(accountButton).toBeOnTheScreen();
  });

  it("should redirect to account screen when account button is pressed", () => {
    render(<App />);
    const accountButton = screen.getByLabelText("réglages", { exact: false });
    fireEvent.press(accountButton);
    const accountScreen = screen.getByText("Réglages profil");
    expect(accountScreen).toBeOnTheScreen();
  });
});
