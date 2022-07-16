import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { IMAGE } from "../constants/Images";

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isHome ? (
          <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => navigation.openDrawer()}>
            <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={IMAGE.MENU_ICON} resizeMode="contain" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => navigation.goBack()}>
            <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={IMAGE.BACK_ICON} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1.5, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}

export default CustomHeader;
