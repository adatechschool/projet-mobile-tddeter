import { Button, Text, View } from "react-native";

export default function Exposant({ name, biography, categories, formsOfPayment }) {
  return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
      <Text>Bio : {biography}</Text>
      <Text>Catégories : {categories}</Text>
      <Text>Moyens de paiement : {formsOfPayment} </Text>
      <Button
      // onPress={}
      title = "Voir +"/>
    </View>
  );
}
