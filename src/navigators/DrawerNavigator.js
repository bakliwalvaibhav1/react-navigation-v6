import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import NotificationsPage from "../pages/Notifications/NotificationsPage";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginLeft: 5 }}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate("MenuTab")}>
          <Text>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate("Notifications")}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" screenOptions={{ headerShown: false }} drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsPage} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
