import Exposant from "../Components/Exposant";
import { render, screen } from "@testing-library/react-native";

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
});
