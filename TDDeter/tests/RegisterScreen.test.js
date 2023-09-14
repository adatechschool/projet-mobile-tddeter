import RegisterScreen from "../Screens/RegisterScreen";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("registerSCreen test suite", () => {
  it("should display email input", () => {
    render(<RegisterScreen />);
    const emailInput = screen.getByPlaceholderText("mail", { exact: false });
    expect(emailInput).toBeOnTheScreen();
  });
});
