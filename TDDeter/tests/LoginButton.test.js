import { fireEvent, render, screen } from "@testing-library/react-native";
import LoginButton from "../Components/LoginButton";
import App from "../App";

describe("LoginButton test suite", () => {
    it("should call onPress function when login button pressed", () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<LoginButton onPressAction={onPressMock} />);
        const buttonComponent = getByTestId('login-button');
        fireEvent.press(buttonComponent);
        expect(onPressMock).toHaveBeenCalled();
    });

    it("should redirect to login screen when login button is pressed", () => {
        render(<App/>);
        const buttonComponent = screen.getByText('login');
        fireEvent.press(buttonComponent);
        const LoginScreen = screen.getByText('Login Screen');
        expect(LoginScreen).toBeOnTheScreen(); 
    });
})