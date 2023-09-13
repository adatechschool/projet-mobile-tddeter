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
    const nextEvent = screen.getByText("prochain", { exact: false });
    expect(nextEvent).toBeOnTheScreen();
  });

  it("should redirect to BrocanteScreen when pressable in NextEvent is pressed", () => {
    render(<App />);
    const textInfos = screen.getByText("info", { exact: false });
    fireEvent.press(textInfos);
    const brocanteScreen = screen.getByText("exposant", { exact: false });
    expect(brocanteScreen).toBeOnTheScreen();
  });
});

describe("HomeScreen tests suite with database", () => {
  beforeEach(async () => {
    const clearDB = await database.from("brocantes").delete().neq("city", "");
  });

  it("should display information from brocante table", async () => {
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
    const nextEventCity = screen.findByText(city, { exact: false });
    const nextEventDate = screen.findByText(date, { exact: false });
    expect(await nextEventCity).toBeOnTheScreen();
    expect(await nextEventDate).toBeOnTheScreen();
  });

  it("should display no event text when 'brocantes' table is empty and not display NextEvent", async () => {
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    const nextEventComponent = screen.findByText("prochain", { exact: false });
    const noEventText = screen.findByText("Pas d'évènement à venir.");
    expect(await noEventText).toBeOnTheScreen();
    expect(await nextEventComponent).not.toBeOnTheScreen();
  });
});
