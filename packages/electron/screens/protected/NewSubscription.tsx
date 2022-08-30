import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SubscriptionAddition from "../../components/addsubscription/SubscriptionAddition";
import SubscriptionSwipe from "../../components/addsubscription/SubscriptionSwipe";
import SubscriptionInfoScreen from "./SubscriptionInfoScreen";

const Stack = createNativeStackNavigator();

export default function SubscriptionStack() {
  return (
    <Stack.Navigator initialRouteName="NewSubscriptionScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NewSubscriptionScreen"
        component={NewSubscriptionScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={SubscriptionInfoScreen}
        name="SubscriptionInfo"
      />
    </Stack.Navigator>
  );
}

function NewSubscriptionScreen() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <SubscriptionSwipe />
        <SubscriptionAddition />
        <StatusBar style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1c1c23",
  },
});
