import { View, Text } from "react-native";

export default function NextEvent( {city} ) {
  return (
    <View>
      <Text>Prochaine brocante : {city} le 6 novembre.</Text>
    </View>
  );
}
