import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BudgetList from "../../components/budgetsceen/BudgetList";
import BudgetsChartSection from "../../components/budgetsceen/BudgetsChartSection";
import SettingsIcon from "../../icons/SettingsIcon";

const BudgetsScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <BudgetsChartSection />
      <BudgetList />
    </SafeAreaView>
  );
};

export default BudgetsScreen;
const styles = StyleSheet.create({
  screenContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: "#1c1c23",
  },
});
