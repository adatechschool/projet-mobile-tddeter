import { screen, render } from "@testing-library/react-native";
import NextEvent from "../Components/NextEvent";

describe("Next event test suite", () => {
  it("should display passed-in city", () => {
    render(<NextEvent city="Paris" />);
    const cityProp = screen.getByText("Paris", { exact: false });
    expect(cityProp).toBeOnTheScreen();
  });

  it("should display passed-in date", () => {
    render(<NextEvent date="dimanche 26 novembre" />);
    const dateProp = screen.getByText("dimanche 26 novembre", { exact: false });
    expect(dateProp).toBeOnTheScreen();
  });

  it("should contain a pressable element", () => {
    render(<NextEvent />);
    const pressableElement = screen.getByRole("button");
    expect(pressableElement).toBeOnTheScreen();
  });

  it("should contain 'infos' text in pressable element", () => {
    render(<NextEvent />);
    const pressableElement = screen.getByRole("button");
    const textInfos = screen.getByText("info", { exact: false });
    expect(pressableElement).toContainElement(textInfos);
  });
});
