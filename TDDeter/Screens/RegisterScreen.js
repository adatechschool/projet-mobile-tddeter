import { View, Text, TextInput, Button } from "react-native";

export default function RegisterScreen({ navigation }) {
  const redirectToAccount = () => {
    navigation.navigate("Account");
  };

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
      <Button
        onPress={redirectToAccount}
        title="Valider"
        accessibilityLabel="Valider l'inscription"
      />
    </View>
  );
}
