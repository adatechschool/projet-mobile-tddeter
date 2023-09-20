import { screen, render, fireEvent } from "@testing-library/react-native";
import NextEvent from "../Components/NextEvent";
import database from "../backend/database";

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

  it("should have a 'Je participe' button when user is logged in", async () => {
    const userId = "123";
    render(<NextEvent user_id={userId} />);
    const attendingButton = screen.findByLabelText("Je participe", {
      exact: false,
    });
    expect(await attendingButton).toBeOnTheScreen();
  });

  it("should modify attendingButton when clicked to show 'Je serai à la brocante' when user is logged in", async () => {
    const userId = "123";
    render(<NextEvent user_id={userId} />);
    const attendingButton = screen.findByLabelText("Je participe", {
      exact: false,
    });
    fireEvent.press(await attendingButton);
    const willAttendButton = screen.getByLabelText("je serai", {
      exact: false,
    });
    const willAttendButtonText = screen.getByText("j'y serai", {
      exact: false,
    });
    expect(willAttendButton).toBeOnTheScreen();
    expect(willAttendButtonText).toBeOnTheScreen();
  });

  it("should not display attending button when user is not logged in", () => {
    render(<NextEvent />);
    const notLoggedText = screen.getByText("Ce sera super", {
      exact: false,
    });
    expect(notLoggedText).toBeOnTheScreen();
  });

  it("should insert data in 'participations' table when 'Je participe' is pressed and display a confirmation text", async () => {
    const clearDBExposantes = await database
      .from("exposantes")
      .delete()
      .neq("first_name", "");
    const clearDBBrocante = await database
      .from("brocantes")
      .delete()
      .neq("city", "");

    const lastName = "Tintin";
    const firstName = "Milou";
    const email = "capitaine@haddock.com";
    const password = "profTournesolLeBest";
    const addedExposante = await database
      .from("exposantes")
      .insert({
        last_name: lastName,
        first_name: firstName,
        email: email,
        password: password,
      })
      .select();

    const city = "Moulinsart";
    const date = "06-03-2035";
    const addedBrocante = await database
      .from("brocantes")
      .insert({
        city: city,
        date: date,
      })
      .select();

    const brocanteId = addedBrocante.data[0].id;
    const exposanteId = addedExposante.data[0].id;

    render(<NextEvent user_id={exposanteId} brocante_id={brocanteId} />);

    expect(
      screen.getByLabelText("Votre participation", { exact: false }),
    ).not.toBeVisible();

    const attendingButton = screen.findByLabelText("Je participe", {
      exact: false,
    });
    fireEvent.press(await attendingButton);

    const validatedParticipationModal = screen.findByLabelText(
      "Votre participation",
      { exact: false },
    );

    expect(await validatedParticipationModal).toBeVisible();
  });
});
