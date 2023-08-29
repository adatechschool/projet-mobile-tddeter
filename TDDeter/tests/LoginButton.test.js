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
})