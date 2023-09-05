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
    const cityName = screen.getByText(city, { exact: false });
    expect(cityName).toBeOnTheScreen();
  });

  it("should display the passed-in city as a prop (Paris)", () => {
    const city = "Paris";
    render(
      <NavigationContainer>
        <BrocanteScreen city={city} />
      </NavigationContainer>
    );
    const cityName = screen.getByText(city, { exact: false });
    expect(cityName).toBeOnTheScreen();
  });

  it("should display the passed-in date as a string", () => {
    const date = "dimanche 26 novembre";
    render(
      <NavigationContainer>
        <BrocanteScreen date={date} />
      </NavigationContainer>
    );
    const dateText = screen.getByText(date, { exact: false });
    expect(dateText).toBeOnTheScreen();
  });

  it("should display the passed-in date as a prop", () => {
    const date = "lundi 27 novembre";
    render(
      <NavigationContainer>
        <BrocanteScreen date={date} />
      </NavigationContainer>
    );
    const dateText = screen.getByText(date, { exact: false });
    expect(dateText).toBeOnTheScreen()
  });
});
