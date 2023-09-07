import Exposant from "../Components/Exposant";
import {
  render,
  screen,
  fireEvent,
  Button,
} from "@testing-library/react-native";

describe("Exposant component test suite", () => {
  it("should display exposant's name", () => {
    const name = "Lulu la brocante";
    render(<Exposant name={name} />);
    const exposantName = screen.getByText(name, { exact: false });
    expect(exposantName).toBeOnTheScreen();
  });

  it("should display exposant's name as a prop", () => {
    const name = "Benji la malle";
    render(<Exposant name={name} />);
    const exposantName = screen.getByText(name, { exact: false });
    expect(exposantName).toBeOnTheScreen();
  });

  it("should display exposant's biography", () => {
    const biography = "Ceci est une biography sans saut de lignes";
    render(<Exposant biography={biography} />);
    const exposantBiography = screen.getByText(biography, { exact: false });
    expect(exposantBiography).toBeOnTheScreen();
  });

  it("should display exposant's biography as a prop", () => {
    const biography = "Ceci est une autre biography sans saut de lignes";
    render(<Exposant biography={biography} />);
    const exposantBiography = screen.getByText(biography, { exact: false });
    expect(exposantBiography).toBeOnTheScreen();
  });

  it("should display exposant's item categories", () => {
    const categories = "livres";
    render(<Exposant categories={categories} />);
    const exposantCategories = screen.getByText(categories, { exact: false });
    expect(exposantCategories).toBeOnTheScreen();
  });

  it("should display exposant's item categories as a prop", () => {
    const categories = "Mobilier";
    render(<Exposant categories={categories} />);
    const exposantCategories = screen.getByText(categories, { exact: false });
    expect(exposantCategories).toBeOnTheScreen();
  });

  it("should display exposant's accepted form of payment", () => {
    const acceptedFormsOfPayment = "Cash, CB, Paypal";
    render(<Exposant formsOfPayment={acceptedFormsOfPayment} />);
    const exposantAcceptedFormsOfPayment = screen.getByText(
      acceptedFormsOfPayment,
      { exact: false }
    );
    expect(exposantAcceptedFormsOfPayment).toBeOnTheScreen();
  });

  it("should display exposant's accepted form of payment as a prop", () => {
    const acceptedFormsOfPayment = "JUSTE DU CASH";
    render(<Exposant formsOfPayment={acceptedFormsOfPayment} />);
    const exposantAcceptedFormsOfPayment = screen.getByText(
      acceptedFormsOfPayment,
      { exact: false }
    );
    expect(exposantAcceptedFormsOfPayment).toBeOnTheScreen();
  });

  it("should display a 'voir détails' button", () => {
    render(<Exposant />);
    const showDetailsBtn = screen.getByText("voir +", { exact: false });
    expect(showDetailsBtn).toBeOnTheScreen();
  });

  it("should display 'voir -' when showDetails button is pressed", () => {
    render(<Exposant />);
    const showDetailsBtn = screen.getByText("voir +", { exact: false });
    fireEvent.press(showDetailsBtn);
    const showLessDetailsBtn = screen.getByText("voir -", { exact: false });
    expect(showLessDetailsBtn).toBeOnTheScreen();
  });

  it("should display 'voir +' when showlessdetails button is pressed", () => {
    render(<Exposant />);
    const showDetailsBtn = screen.getByText("voir +", { exact: false });
    fireEvent.press(showDetailsBtn);
    const showLessDetailsBtn = screen.getByText("voir -", { exact: false });
    fireEvent.press(showLessDetailsBtn);
    expect(showDetailsBtn).toHaveTextContent("voir +");
  });
});
