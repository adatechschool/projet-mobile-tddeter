import { View, Text } from "react-native";
import Navbar from "../Components/Navbar";

export default function BrocanteScreen({ city }) {
  return (
    <View>
      <Navbar />
      <Text>Brocante Screen</Text>
      <Text>et les exposants voila {city}</Text>
    </View>
  );
}
