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

  it("should display name and not display formsOfPayment on Exposant component", () => {
    const name = "Juju";
    const formsOfPayment = "chèques";
    render(<Exposant name={name} formsOfPayment={formsOfPayment} />);
    const sellerNameText = screen.getByText(name, { exact: false });
    const acceptedTypesOfPaymentText = screen.getByText(formsOfPayment, {
      exact: false,
    });
    expect(sellerNameText).toBeVisible();
    expect(acceptedTypesOfPaymentText).not.toBeVisible();
  });

  it("should display category and not display biography on Exposant component", () => {
    const biography = "blablablabalbala";
    const categories = "porcelaine";
    render(<Exposant biography={biography} categories={categories} />);
    const categoriesText = screen.getByText(categories, { exact: false });
    const biographyText = screen.getByText(biography, { exact: false });
    expect(categoriesText).toBeVisible();
    expect(biographyText).not.toBeVisible();
  });

  it("should display biography and formsOfPayment when 'voir +' is pressed", () => {
    const biography = "Malena est une star de la night";
    const formsOfPayment = "des sacs de bléz";
    render(<Exposant biography={biography} formsOfPayment={formsOfPayment}/>);
    const biographyText = screen.getByText(biography, { exact: false });
    const acceptedTypesOfPaymentText = screen.getByText(formsOfPayment, {
      exact: false,
    });
    const showDetailsBtn = screen.getByText("voir +", { exact: false });
    fireEvent.press(showDetailsBtn);
    expect(biographyText).toBeVisible();
    expect(acceptedTypesOfPaymentText).toBeVisible();
  })
});
