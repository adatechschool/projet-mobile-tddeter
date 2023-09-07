import { View, Button } from "react-native";

export default function Footer() {
  return (
    <View accessibilityLabel="footer">
      <Button
        title="Footer's home button"
        accessibilityLabel="Bouton pour aller sur la page accueil"
      />
    </View>
  );
}
