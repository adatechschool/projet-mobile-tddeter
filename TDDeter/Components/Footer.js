import { View, Button } from "react-native";

export default function Footer({ navigation }) {
  const redirectToHome = () => {
    navigation.navigate("Home");
  };

  const redirectToAccount = () => {
    navigation.navigate("Account");
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
        onPress={redirectToAccount}
      />
    </View>
  );
}
