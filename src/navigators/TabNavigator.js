import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IMAGE } from "../constants/Images";
import HomeStackNavigator from "./HomeStackNavigator";
import SettingsStackNavigator from "./SettingsStackNavigator";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? IMAGE.HOME_SELECTED_ICON : IMAGE.HOME_ICON;
          } else if (route.name === "Settings") {
            iconName = focused ? IMAGE.SETTINGS_SELECTED_ICON : IMAGE.SETTINGS_ICON;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
