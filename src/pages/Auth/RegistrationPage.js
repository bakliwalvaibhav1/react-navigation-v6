import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

function RegistrationPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Registration Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

export default RegistrationPage;
