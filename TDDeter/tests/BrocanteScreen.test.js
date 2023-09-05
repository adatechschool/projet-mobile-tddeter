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
});
