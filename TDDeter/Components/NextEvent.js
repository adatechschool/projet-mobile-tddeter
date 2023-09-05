import { View, Text, Pressable } from "react-native";

export default function NextEvent({ city, date }) {
  return (
    <View>
      <Text>
        Prochaine brocante : {city}, le {date}.
      </Text>
      <Pressable accessibilityRole="button">
        <Text>Clique ici pour voir les infos</Text>
      </Pressable>
    </View>
  );
}