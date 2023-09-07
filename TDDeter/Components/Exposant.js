import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Exposant({
  name,
  biography,
  categories,
  formsOfPayment,
}) {
  const [isPressed, setPressed] = useState("voir +");

  const changeTitle = () => {
    if (isPressed == "voir +") {
      setPressed("voir -");
    } else if (isPressed == "voir -") {
      setPressed("voir +");
    }
  };

  return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
      <Text style={{ opacity: 0}}>Bio : {biography}</Text>
      <Text>Catégories : {categories}</Text>
      <Text style={{ opacity: 0}}>Moyens de paiement : {formsOfPayment} </Text>
      <Button onPress={changeTitle} title={isPressed} />
    </View>
  ); 
}
