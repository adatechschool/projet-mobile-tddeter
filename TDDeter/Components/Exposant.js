import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Exposant({
  name,
  biography,
  categories,
  formsOfPayment,
}) {
  const [showDetails, setShowDetails] = useState("voir +");
  const [opacity, setOpacity] = useState(0);
  const changeTitle = () => {
    if (showDetails == "voir +") {
      setOpacity(1);
      setShowDetails("voir -");
    } else if (showDetails == "voir -") {
      setOpacity(0);
      setShowDetails("voir +");
    };
  };

  return (
    <View accessibilityLabel="exposant">
      <Text> Ceci est un brocanteur</Text>
      <Text>Son nom est {name}</Text>
      <Text style={{ opacity: opacity }}>Bio : {biography}</Text>
      <Text>Catégories : {categories}</Text>
      <Text style={{ opacity: opacity }}>Moyens de paiement : {formsOfPayment} </Text>
      <Button onPress={changeTitle} title={showDetails} />
    </View> 
  ); 
}
