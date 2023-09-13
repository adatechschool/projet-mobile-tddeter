import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { screen, render, fireEvent } from "@testing-library/react-native";
import App from "../App";
import database from "../backend/database.js";

describe("HomeScreen test suite", () => {
  it("should render next event component", () => {
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
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

  it("should display information from brocante table", async () => {
    const clearDB = await database.from("brocantes").delete().neq("city", "");
    const city = "Barcelone";
    const date = "2023-11-08";
    const { data: dataNewBrocante } = await database
      .from("brocantes")
      .insert({ city: city, date: date })
      .select("id");
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    const NextEventCity = screen.findByText(city, { exact: false });
    const NextEventDate = screen.findByText(date, { exact: false });
    expect(await NextEventCity).toBeOnTheScreen();
    expect(await NextEventDate).toBeOnTheScreen();
  });
});
