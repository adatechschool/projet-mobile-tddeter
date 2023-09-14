import { View, Text, TextInput } from "react-native";

export default function RegisterScreen() {
  return (
    <View>
      <Text>Formulaire d'inscription</Text>
      <TextInput
        placeholder="Votre Email"
        // onChangeText={(newMail) => setMail(newMail)}
      />
    </View>
  );
}
