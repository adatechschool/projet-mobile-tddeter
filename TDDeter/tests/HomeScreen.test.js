import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { screen, render } from "@testing-library/react-native";

describe("HomeScreen test suite", () => {
  it("should render next event component", () => {
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    const NextEvent = screen.getByText("prochain", { exact: false });
    expect(NextEvent).toBeOnTheScreen();
  });

});
