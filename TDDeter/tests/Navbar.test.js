import { render, screen } from "@testing-library/react-native";
import Navbar from "../Components/Navbar";
import { NavigationContainer } from "@react-navigation/native";

describe("Navbar test suite", () => {
  beforeEach(() =>{
    render (<NavigationContainer>
      <Navbar />
    </NavigationContainer>)
  })  
  
  it("should display a Login button", () => {
    const navbar = screen.queryByTestId('navbar')
    const loginButton = screen.queryByTestId('login-button');
    expect(navbar).toContainElement(loginButton)
  });

})
