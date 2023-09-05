import { View, Text, Pressable } from "react-native";

export default function NextEvent({ city, date, onPressAction }) {
  return (
    <View>
      <Text>
        Prochaine brocante : {city}, le {date}.
      </Text>
      <Pressable accessibilityRole="button" onPress={onPressAction}>
        <Text>Clique ici pour voir les infos</Text>
      </Pressable>
    </View>
  );
}
