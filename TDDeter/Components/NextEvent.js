import { View, Text, Pressable, Button } from "react-native";

export default function NextEvent({ city, date, onPressAction }) {
  return (
    <View>
      <Text>
        Prochaine brocante : {city}, le {date}.
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Bouton pour voir plus d'informations sur la brocante"
        onPress={onPressAction}
      >
        <Text>Clique ici pour voir les infos</Text>
      </Pressable>
      <Button
        title="Je participe"
        accessibilityLabel="Bouton pour indiquer que je participe à la brocante"
      />
    </View>
  );
}
