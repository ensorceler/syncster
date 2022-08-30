import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import GeneralSettings from "../../components/settings/GeneralSettings";
import MySubscriptionsSettings from "../../components/settings/MySubscriptionsSettings";
import SettingsHeader from "../../components/settings/SettingsHeader";
import SettingsUserInfo from "../../components/settings/SettingsUserInfo";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader />
      <SettingsUserInfo />
      <GeneralSettings />
      <MySubscriptionsSettings />
      <AppearanceSettings />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c23",
    flex: 1,
    paddingHorizontal: 20,
  },
});
