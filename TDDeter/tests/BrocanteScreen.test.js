import { screen, render } from "@testing-library/react-native";
import BrocanteScreen from "../Screens/BrocanteScreen";
import { NavigationContainer } from "@react-navigation/native";

describe("BrocanteScreen test suite", () => {
  it("should contain the Navbar", () => {
    render(
      <NavigationContainer>
        <BrocanteScreen />
      </NavigationContainer>
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeOnTheScreen();
  });

  it("should display the passed-in city name: Montreuil", () => {
    const city = "Montreuil";
    render(
      <NavigationContainer>
        <BrocanteScreen city={city} />
      </NavigationContainer>
    );
    const cityName = screen.getByText(city);
    expect(cityName).toBeOnTheScreen();
  });
});
