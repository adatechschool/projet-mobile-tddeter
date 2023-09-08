import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import BrocanteScreen from "./Screens/BrocanteScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import Footer from "./Components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={Footer}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Brocante" component={BrocanteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
