import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

function SettingsDetailsPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings Details" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings Details!</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingsDetailsPage;
