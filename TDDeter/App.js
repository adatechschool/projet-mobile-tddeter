import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
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
