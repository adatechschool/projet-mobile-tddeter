import { View, Text, StyleSheet } from "react-native";
import Navbar from "../Components/Navbar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Home Screen</Text>
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
