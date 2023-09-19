import { screen, render, fireEvent } from "@testing-library/react-native";
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
    const pressableElement = screen.getByLabelText("plus d'informations", {
      exact: false,
    });
    expect(pressableElement).toBeOnTheScreen();
  });

  it("should contain 'infos' text in pressable element", () => {
    render(<NextEvent />);
    const pressableElement = screen.getByLabelText("plus d'informations", {
      exact: false,
    });
    const textInfos = screen.getByText("info", { exact: false });
    expect(pressableElement).toContainElement(textInfos);
  });

  it("should call onPress function when infos pressable is pressed", () => {
    const onPressMock = jest.fn();
    render(<NextEvent onPressAction={onPressMock} />);
    const pressableElement = screen.getByLabelText("plus d'informations", {
      exact: false,
    });
    fireEvent.press(pressableElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  it("should have a 'Je participe' button", () => {
    render(<NextEvent />);
    const attendingButton = screen.getByLabelText("Je participe", {
      exact: false,
    });
    expect(attendingButton).toBeOnTheScreen();
  });

  it("should modify attendingButton when clicked to show 'Je serai à la brocante'", () => {
    render(<NextEvent />);
    const attendingButton = screen.getByLabelText("Je participe", {
      exact: false,
    });
    fireEvent.press(attendingButton);
    const willAttendButton = screen.getByLabelText("je serai", {
      exact: false,
    });
    const willAttendButtonText = screen.getByText("j'y serai", {
      exact: false,
    });
    expect(willAttendButton).toBeOnTheScreen();
    expect(willAttendButtonText).toBeOnTheScreen();
  });
});
