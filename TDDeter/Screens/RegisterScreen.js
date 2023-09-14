import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitForm = () => {
    if (mail === "") {
      throw new Error("Champ email requis");
    } else if (password === "") {
      throw new Error("Champ mot de passe requis");
    } else if (firstName === "" || lastName === "") {
      throw new Error("Champ nom ou prénom requis");
    } else {
      redirectToAccount();
    }
  };
  const redirectToAccount = () => {
    navigation.navigate("Account");
  };

  return (
    <View>
      <Text>Formulaire d'inscription</Text>
      <TextInput
        placeholder="Votre prénom"
        onChangeText={(newFirstName) => setFirstName(newFirstName)}
      />
      <TextInput
        placeholder="Votre nom"
        onChangeText={(newLastName) => setLastName(newLastName)}
      />
      <TextInput
        placeholder="Votre email"
        onChangeText={(newMail) => setMail(newMail)}
      />
      <TextInput
        placeholder="Votre mot de passe"
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button
        onPress={submitForm}
        title="Valider"
        accessibilityLabel="Valider l'inscription"
      />
    </View>
  );
}
