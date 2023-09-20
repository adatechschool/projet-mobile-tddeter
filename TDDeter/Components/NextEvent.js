import { useEffect, useState } from "react";
import { View, Text, Pressable, Button, Modal } from "react-native";
import database from "../backend/database";

export default function NextEvent({
  user_id,
  brocante_id,
  city,
  date,
  onPressAction,
}) {
  const [attending, setAttending] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addParticipationInDB = async () => {
    await database.from("participations").insert({
      exposante_id: user_id,
      brocante_id: brocante_id,
    });
  };
  const handleAttending = () => {
    setAttending(true);
    addParticipationInDB();
  };

  useEffect(() => {
    if (user_id) {
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
          onPress={handleAttending}
        />
      ) : (
        <Text>Ce sera super !</Text>
      )}
      <Modal
        accessibilityLabel="Confirmation de votre participation"
        visible={attending}
      >
        <Text>Votre participation a bien été prise en compte</Text>
      </Modal>
    </View>
  );
}
