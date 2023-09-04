import { View, Text, StyleSheet } from "react-native";
import Navbar from "../Components/Navbar";
import NextEvent from "../Components/NextEvent";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Home Screen</Text>
      <Text>Bonjour, vous êtes connecté !</Text>
      <NextEvent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
