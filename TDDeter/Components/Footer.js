import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";

export default function Footer() {
  const navigation = useNavigation();

  const redirectToHome = () => {
    navigation.navigate("Home");
  };

  const redirectToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View accessibilityLabel="footer">
      <Button
        title="Home"
        accessibilityLabel="Bouton pour aller sur la page accueil"
        onPress={redirectToHome}
      />
      <Button
        title="Réglages"
        accessibilityLabel="Bouton pour aller sur la page réglages"
        onPress={redirectToSettings}
      />
    </View>
  );
}
