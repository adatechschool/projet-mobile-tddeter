import { Button } from "react-native";
 
export default function LoginButton({onPressAction}) {

  return(
    <Button 
      title="login" 
      onPress={onPressAction} 
      testID="login-button"
    />
  );
}