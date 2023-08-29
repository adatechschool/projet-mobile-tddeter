import { Button } from "react-native";

export default function LoginButton({onPress}) {
    return(<Button 
      title="login" 
      onPress={onPress} 
      testID="login-button"
    />);
}