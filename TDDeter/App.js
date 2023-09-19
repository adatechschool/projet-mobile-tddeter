import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import BrocanteScreen from "./Screens/BrocanteScreen";
import AccountScreen from "./Screens/AccountScreen";
import Footer from "./Components/Footer";
import RegisterScreen from "./Screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={Footer}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Brocante" component={BrocanteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
