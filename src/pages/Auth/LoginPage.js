import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function LoginPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login Screen!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("HomeApp")}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("Register")}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;
