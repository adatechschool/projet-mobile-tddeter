import { Text, View } from "react-native";

export default function Exposant({ name }) {
  return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
    </View>
  );
}
