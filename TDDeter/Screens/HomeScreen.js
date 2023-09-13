import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../Components/Navbar";
import NextEvent from "../Components/NextEvent";
import database from "../backend/database.js";

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [nextEventVisible, setNextEventVisible] = useState(true);

  useEffect(() => {
    async function getNextEventInfo() {
      try {
        const { data: nextEventData } = await database
          .from("brocantes")
          .select("city, date")
          .limit(1);
        const { city, date } = nextEventData[0];
        setCity(city);
        setDate(date);
      } catch (error) {
        setNextEventVisible(false);
        // console.log(error);
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
      {nextEventVisible ? (
        <NextEvent onPressAction={redirectToBrocante} city={city} date={date} />
      ) : (
        <Text>Pas d'évènement à venir.</Text>
      )}
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
