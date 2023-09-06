import { View, Text } from "react-native";
import Navbar from "../Components/Navbar";

export default function BrocanteScreen({ city, date, openingTimes }) {
  return (
    <View>
      <Navbar />
      <Text>Brocante Screen</Text>
      <Text>Venez voir les exposant.e.s de la brocante de {city}</Text>
      <Text>Elles et ils seront là le {date}</Text>
      <Text>Horaires : {openingTimes}</Text>
    </View>
  );
}
