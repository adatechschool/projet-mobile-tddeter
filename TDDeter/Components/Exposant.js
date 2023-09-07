import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Exposant({
  name,
  biography,
  categories,
  formsOfPayment,
}) {
  const [isPressed, setPressed] = useState("voir +");
  const [isOpaque, setOpaque] = useState(0);
  const changeTitle = () => {
    if (isPressed == "voir +") {
      setOpaque(1)
      setPressed("voir -");
    } else if (isPressed == "voir -") {
      setOpaque(0)
      setPressed("voir +");
    }
  };

  return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
      <Text style={{ opacity: isOpaque }}>Bio : {biography}</Text>
      <Text>Catégories : {categories}</Text>
      <Text style={{ opacity: isOpaque }}>Moyens de paiement : {formsOfPayment} </Text>
      <Button onPress={changeTitle} title={isPressed} />
    </View> 
  ); 
}
