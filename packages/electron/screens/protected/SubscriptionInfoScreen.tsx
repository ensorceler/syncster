import { StyleSheet } from "react-native";
import SubscriptionDetailsSave from "../../components/subscriptioninfo/SubscriptionDetailsSave";
import SubscriptionInfoHeaderCard from "../../components/subscriptioninfo/SubscriptionInfoHeaderCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function SubscriptionInfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SubscriptionInfoHeaderCard />
      <SubscriptionDetailsSave />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1c1c23",
  },
});
