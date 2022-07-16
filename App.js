import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import LoginPage from "./src/pages/Auth/LoginPage";
import RegistrationPage from "./src/pages/Auth/RegistrationPage";

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} />
        <StackApp.Screen name="Login" component={LoginPage} />
        <StackApp.Screen name="Register" component={RegistrationPage} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
