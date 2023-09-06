import Exposant from "../Components/Exposant";
import { render, screen } from "@testing-library/react-native";


describe("Exposant component test suite", () => {
    it("should display exposant's name", () => {
        const name = "Lulu la brocante";
        render(<Exposant name =  {name} />);
        const exposantName = screen.getByText(name, {exact: false});
        expect(exposantName).toBeOnTheScreen();
    });

    it("should display exposant's name as a prop", () => {
        const name = "Benji la malle";
        render(<Exposant name =  {name} />);
        const exposantName = screen.getByText(name, {exact: false});
        expect(exposantName).toBeOnTheScreen();
    })
}) 