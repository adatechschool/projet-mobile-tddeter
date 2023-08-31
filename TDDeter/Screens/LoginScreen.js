import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen() {
  
const submitForm = ()=>{
  throw new Error("Champ email requis");   // erreur à retravailler pour l'UX
}

  return ( 
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Votre Email" />
      <TextInput placeholder="Votre mot de passe" />
      <Button onPress={submitForm} title="Se connecter" />
    </View>
  );
}
