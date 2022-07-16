import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../pages/Settings/SettingsPage";
import SettingsDetailsPage from "../pages/Settings/SettingsDetailsPage";

const StackSetting = createStackNavigator();

function SettingsStackNavigator() {
  return (
    <StackSetting.Navigator initialRouteName="SettingsPage" screenOptions={{ headerShown: false }}>
      <StackSetting.Screen name="SettingsPage" component={SettingsPage} />
      <StackSetting.Screen name="SettingsDetailsPage" component={SettingsDetailsPage} />
    </StackSetting.Navigator>
  );
}

export default SettingsStackNavigator;
