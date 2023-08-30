import { fireEvent, render } from "@testing-library/react-native";
import LoginButton from "../Components/LoginButton";

describe("LoginButton test suite", () => {
    it("should call onPress function when login button pressed", () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<LoginButton onPress={onPressMock} />);
        const buttonComponent = getByTestId('login-button');
        fireEvent.press(buttonComponent);
        expect(onPressMock).toHaveBeenCalled();
    });
      // if tu cliques sur login 
      // then you go login page
      // expect(button).toredirectto(loginpage)

    it("should redirect to login screen when login button is pressed", () => {
        const getToLoginScreenMock = jest.fn ();
        const { getByText } = render(<LoginButton onPress={getToLoginScreenMock} />);
        const buttonComponent = getByText('login');
        const LoginScreen = getByText('Login Screen')
        fireEvent.press(buttonComponent);
        expect(LoginScreen).toBeOnTheScreen(); 
    });
})