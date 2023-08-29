import { render, screen } from "@testing-library/react-native";
import App from "./App";

describe("Test test suite", () => {
    it("should be true", () => {
        expect(true).toBe(true);
    });
    it("should be false", () => {
        expect(false).toBe(false);
    })
});

describe("Navbar test suite", () => {
    it("should render navbar", () => {
        render(<App />);
        const navbar = screen.getByTestId('navbar');
        expect(navbar).toBeOnTheScreen();
    })
})