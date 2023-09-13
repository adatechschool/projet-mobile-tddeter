import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../Components/Navbar";
import NextEvent from "../Components/NextEvent";
import database from "../backend/database.js";

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    async function getNextEventInfo() {
      try {
        const { data: nextEventData } = await database
          .from("brocantes")
          .select("city, date")
          .limit(1);
        const city = nextEventData[0].city;
        const date = nextEventData[0].date;
        setCity(city);
        setDate(date);
      } catch (error) {
        console.log(error);
      }
    }
    getNextEventInfo();
  }, []);

  const redirectToBrocante = () => {
    navigation.navigate("Brocante");
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Home Screen</Text>
      <Text>Bonjour, vous êtes connecté !</Text>
      <NextEvent onPressAction={redirectToBrocante} city={city} date={date} />
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
