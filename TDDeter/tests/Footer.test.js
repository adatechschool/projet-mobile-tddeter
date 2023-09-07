import { fireEvent, render, screen } from "@testing-library/react-native";
import Footer from "../Components/Footer";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";

describe("Footer test suite", () => {
  it("should render home button", () => {
    render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );
    const homeButton = screen.getByLabelText("accueil", { exact: false });
    expect(homeButton).toBeOnTheScreen();
  });

  it("should redirect to home screen when home button is pressed from login screen", async () => {
    render(<App />);
    const loginButton = screen.getByText("login");
    fireEvent.press(loginButton);
    const homeButton = screen.getByLabelText("accueil", { exact: false });
    fireEvent.press(homeButton);
    const homeScreen = screen.getByText("Home Screen");
    expect(homeScreen).toBeOnTheScreen();
  });

  it("should render settings button", () => {
    render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );
    const settingsButton = screen.getByLabelText("réglages", { exact: false });
    expect(settingsButton).toBeOnTheScreen();
  });
});
