import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

function NotificationsPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notifications Page!</Text>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsPage;
