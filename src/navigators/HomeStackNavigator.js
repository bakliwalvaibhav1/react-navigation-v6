import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/Home/HomePage";
import HomeDetailsPage from "../pages/Home/HomeDetailsPage";

const StackHome = createStackNavigator();

function HomeStackNavigator() {
  return (
    <StackHome.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
      <StackHome.Screen name="HomePage" component={HomePage} />
      <StackHome.Screen name="HomeDetailsPage" component={HomeDetailsPage} />
    </StackHome.Navigator>
  );
}

export default HomeStackNavigator;
