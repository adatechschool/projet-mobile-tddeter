import { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";

export default function NextEvent({ city, date, onPressAction }) {
  const [attendingLabel, setAttendingLabel] = useState(
    "Bouton pour confirmer que je participe à la brocante",
  );
  const [attendingText, setAttendingText] = useState("Je participe");
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
        title={attendingText}
        accessibilityLabel={attendingLabel}
        onPress={() => {
          setAttendingLabel("Bouton qui indique que je serai à la brocante");
          setAttendingText("J'y serai");
        }}
      />
    </View>
  );
}
