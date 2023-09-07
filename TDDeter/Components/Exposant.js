import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Exposant({ name, biography, categories, formsOfPayment }) {
  const [isPressed, setPressed] = useState("Voir +");

  const changeTitle = () => {
    setPressed("Voir -");
  };

   return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
      <Text>Bio : {biography}</Text>
      <Text>Catégories : {categories}</Text>
      <Text>Moyens de paiement : {formsOfPayment} </Text>
      <Button
      onPress={changeTitle}
      title = {isPressed}/>
    </View>
  );
} 
