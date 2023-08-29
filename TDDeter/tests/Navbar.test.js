import { fireEvent, render } from "@testing-library/react-native";
import Navbar from "../Components/Navbar";


describe("Navbar test suite", () => {
    const { queryByTestId } = render(
    <Navbar />
  )
    it("should display a Login button", () => {
        const navbar = queryByTestId('navbar')
        const loginButton = queryByTestId('login-button');
        expect(navbar).toContainElement(loginButton)
    });
    it("should redirect to login page", () => {
       // if tu cliques sur login 
       // then you go login page
       // expect(button).toredirectto(loginpage)
       const onPress = jest.fn();
       const buttonComponent = queryByTestId('login-button');

       fireEvent(buttonComponent, 'press');
       expect(onPress).toHaveBeenCalled();
    });
})
