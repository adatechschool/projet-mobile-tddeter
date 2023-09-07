import { render, screen } from "@testing-library/react-native";
import Footer from "../Components/Footer";

describe("Footer test suite", () => {
  it("should render home button", () => {
    render(<Footer />);
    const homeButton = screen.getByLabelText("accueil", { exact: false });
    expect(homeButton).toBeOnTheScreen();
  });
});
