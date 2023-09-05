import { NavigationContainer } from "@react-navigation/native";
import { screen, render } from "@testing-library/react-native";
import NextEvent from "../Components/NextEvent";

describe("Next event test suite", () => {
  
   it("should display passed-in city", () => {
    render(<NextEvent city="Paris"/>);
    const cityProp = screen.getByText("Paris", { exact: false });
    expect(cityProp).toBeOnTheScreen();
   })

 })
