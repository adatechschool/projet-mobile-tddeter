import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen() {
  const [mail, setMail] = useState("");

  const submitForm = () => {
    if (mail === "") {
      throw new Error("Champ email requis");
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Votre Email"
        onChangeText={(newMail) => setMail(newMail)}
      />
      <TextInput placeholder="Votre mot de passe" />
      <Button onPress={submitForm} title="Se connecter" />
    </View>
  );
}
