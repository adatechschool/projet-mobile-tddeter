import { View, Button } from 'react-native';

export default function Navbar() {
    return (
    <View testID='navbar'>
        <Button title='Login' testID='login-button' />
    </View>
    );
}
