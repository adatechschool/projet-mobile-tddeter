import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Votre Email" />
      <TextInput placeholder="Votre mot de passe" />
      <Button title="Se connecter" />
    </View>
  );
}
