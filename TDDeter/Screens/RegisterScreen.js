import { useState } from "react";
import { View, Text, TextInput, Modal, Button } from "react-native";
import database from "../backend/database";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async () => {
    if (email === "") {
      setErrorMessage("Champ email requis");
    } else if (password === "") {
      setErrorMessage("Champ mot de passe requis");
    } else if (firstName === "" || lastName === "") {
      setErrorMessage("Champs nom et prénom requis");
    } else {
      await addUserToDB();
    }
  };

  const addUserToDB = async () => {
    await database.from("exposantes").insert({
      last_name: lastName,
      first_name: firstName,
      email: email,
      password: password,
    });
    setUserCreated(true);
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
        onChangeText={(newEmail) => setEmail(newEmail)}
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
        {userCreated ? (
          <Modal accessibilityLabel="Confirmation de compte créé">
            <Text>Compte créé</Text>
            <Button
              title="OK"
              accessibilityLabel="Aller vers le profil créé"
              onPress={redirectToAccount}
            />
          </Modal>
        ) : (
          <Text>{errorMessage}</Text>
        )}
      </View>
    </View>
  );
}
