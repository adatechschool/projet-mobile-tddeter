import { View, Text } from "react-native";

export default function NextEvent( {city, date} ) {
  return (
    <View>
      <Text>Prochaine brocante : {city}, le {date}.</Text>
    </View>
  );
}
