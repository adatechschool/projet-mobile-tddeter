import { View, Text, TextInput } from "react-native";

export default function RegisterScreen() {
  return (
    <View>
      <Text>Formulaire d'inscription</Text>
      <TextInput
        placeholder="Votre prénom"
        // onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <TextInput
        placeholder="Votre nom"
        // onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <TextInput
        placeholder="Votre email"
        // onChangeText={(newMail) => setMail(newMail)}
      />
      <TextInput
        placeholder="Votre mot de passe"
        // onChangeText={(newPassword) => setPassword(newPassword)}
      />
    </View>
  );
}
