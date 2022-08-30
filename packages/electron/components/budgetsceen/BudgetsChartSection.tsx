import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import SegmentedRoundDisplay from "react-native-segmented-round-display";
import SettingsIcon from "../../icons/SettingsIcon";

const BudgetsChartSection = () => {
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1, position: "absolute", top: 20, right: 20 }}>
        <SettingsIcon />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Spending & Budgets</Text>
      </View>
      <View style={styles.budgetsApproval}>
        <Text style={styles.text}>Your budgets are on track 👌 </Text>
      </View>
    </View>
  );
};

export default BudgetsChartSection;
const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: "#fff",
    height: 300,
  },
  headerTitle: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerTitleText: {
    fontSize: 16,
    color: "#a2a2b5",
  },
  budgetsApproval: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: "#353542",
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 15,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    color: "white",
  },
});
