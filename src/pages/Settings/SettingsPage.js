import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

function SettingsPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("SettingsDetailsPage")}>
          <Text>Settings Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SettingsPage;
