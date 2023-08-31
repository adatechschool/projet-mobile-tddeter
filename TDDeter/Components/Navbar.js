import { View } from 'react-native';
import LoginButton from './LoginButton';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
    const navigation = useNavigation();
    const redirectToLogin = () => {
        navigation.navigate('Login');
    }

    return (
    <View testID='navbar'>
        <LoginButton onPressAction={redirectToLogin}/>
    </View>
    );
}
