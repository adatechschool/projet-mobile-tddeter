import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const redirectToHome = () => {
    navigation.navigate("Home");
  };

  const submitForm = () => {
    if (mail === "") {
      throw new Error("Champ email requis");
    } else if (password === "") {
      throw new Error("Champ mot de passe requis");
    } else {
      redirectToHome();
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Votre Email"
        onChangeText={(newMail) => setMail(newMail)}
      />
      <TextInput
        placeholder="Votre mot de passe"
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button onPress={submitForm} title="Se connecter" />
    </View>
  );
}
