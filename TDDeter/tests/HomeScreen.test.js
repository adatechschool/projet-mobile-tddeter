import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { screen, render, fireEvent } from "@testing-library/react-native";
import App from "../App";

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

  it("should redirect to BrocanteScreen when pressable in NextEvent is pressed", () => {
    render(<App />);
    const textInfos = screen.getByText("info", { exact: false });
    fireEvent.press(textInfos);
    const BrocanteScreen = screen.getByText("exposant", { exact: false });
    expect(BrocanteScreen).toBeOnTheScreen();
  });
});
