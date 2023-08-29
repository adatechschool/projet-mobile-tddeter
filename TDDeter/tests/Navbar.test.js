import { render, screen } from "@testing-library/react-native";
import Navbar from "../Components/Navbar";

describe("Navbar test suite", () => {
  beforeEach(() =>{
    render (<Navbar />)
  })  
  
  it("should display a Login button", () => {
    const navbar = screen.queryByTestId('navbar')
    const loginButton = screen.queryByTestId('login-button');
    expect(navbar).toContainElement(loginButton)
  });

})
