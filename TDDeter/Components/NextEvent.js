import { useEffect, useState } from "react";
import { View, Text, Pressable, Button } from "react-native";

export default function NextEvent({ user, city, date, onPressAction }) {
  const [attending, setAttending] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

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
      {isLoggedIn ? (
        <Button
          title={attending ? "J'y serai" : "Je participe"}
          accessibilityLabel={
            attending
              ? "Bouton qui indique que je serai à la brocante"
              : "Bouton pour confirmer que je participe à la brocante"
          }
          onPress={() => setAttending(true)}
        />
      ) : (
        <Text>Ce sera super !</Text>
      )}
    </View>
  );
}
