import { fireEvent, render, screen } from "@testing-library/react-native";
import LoginButton from "../Components/LoginButton";
import { NavigationContainer } from "@react-navigation/native";
import App from "../App";

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
        // const getToLoginScreenMock = jest.fn ();
        render (<App/>)
        // const { getByText } = render(<LoginButton onPress={getToLoginScreenMock} />);
        const buttonComponent = screen.getByText('login');
        fireEvent.press(buttonComponent);
        const LoginScreen = screen.getByText('Login Screen')
        expect(LoginScreen).toBeOnTheScreen(); 
    });
})