import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../Components/Navbar";
import NextEvent from "../Components/NextEvent";
import Footer from "../Components/Footer";

export default function HomeScreen() {
  const navigation = useNavigation();
  const redirectToBrocante = () => {
    navigation.navigate("Brocante");
  };
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Home Screen</Text>
      <Text>Bonjour, vous êtes connecté !</Text>
      <NextEvent onPressAction={redirectToBrocante} />
      <Footer />
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
