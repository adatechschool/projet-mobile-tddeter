import { render } from "@testing-library/react-native";
import Navbar from "../Components/Navbar";


describe("Navbar test suite", () => {
    const { queryByTestId } = render(
    <Navbar />
  )
    it("should display a Login button", () => {
        const navbar = queryByTestId('navbar')
        const loginButton = queryByTestId('login-button');
        expect(navbar).toContainElement(loginButton)
  })
})
