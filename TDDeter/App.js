import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View testID='page'>
      <View testID='navbar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
