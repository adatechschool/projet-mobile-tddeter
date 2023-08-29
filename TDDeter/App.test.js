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
        expect(page).toContainElement('navbar')
    })
})