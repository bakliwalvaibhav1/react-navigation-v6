import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

function HomePage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("HomeDetailsPage")}>
          <Text>Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
