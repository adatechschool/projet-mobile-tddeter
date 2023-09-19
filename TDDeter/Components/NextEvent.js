import { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";

export default function NextEvent({ city, date, onPressAction }) {
  const [attending, setAttending] = useState(false);
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
        title={attending ? "J'y serai" : "Je participe"}
        accessibilityLabel={
          attending
            ? "Bouton qui indique que je serai à la brocante"
            : "Bouton pour confirmer que je participe à la brocante"
        }
        onPress={() => setAttending(true)}
      />
    </View>
  );
}
