import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import database from "../backend/database";

export default function RegisterScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async () => {
    if (mail === "") {
      setErrorMessage("Champ email requis");
    } else if (password === "") {
      setErrorMessage("Champ mot de passe requis");
    } else if (firstName === "" || lastName === "") {
      setErrorMessage("Champs nom et prénom requis");
    } else {
      await addUserToDB();
      setTimeout(redirectToAccount, 3000);
    }
  };

  const addUserToDB = async () => {
    const response = await database.from("exposantes").insert({
      last_name: lastName,
      first_name: firstName,
      email: mail,
      password: password,
    });
    setCreated(true);
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
      <View>
        {created ? <Text>compte créé</Text> : <Text>{errorMessage}</Text>}
      </View>
    </View>
  );
}
