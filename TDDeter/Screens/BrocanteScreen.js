import { View, Text } from "react-native";
import Navbar from "../Components/Navbar";

export default function BrocanteScreen({ city, date }) {
  return (
    <View>
      <Navbar />
      <Text>Brocante Screen</Text>
      <Text>et les exposants voila {city}</Text>
      <Text> Elles et ils seront là le {date}</Text>
    </View>
  );
}
