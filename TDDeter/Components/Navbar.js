import { View } from 'react-native';
import LoginButton from './LoginButton';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
const navigation = useNavigation();
    return (
    <View testID='navbar'>
        <LoginButton navigationProps={{navigation}}/>
    </View>
    );
}
