import { Button } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
 
export default function LoginButton({navigationProps}) {
    //  const navigation = useNavigation();
  return(
    <Button 
      title="login" 
      onPress={()=> navigationProps.navigate('Login')} 
      testID="login-button"
    />
    
    );
}