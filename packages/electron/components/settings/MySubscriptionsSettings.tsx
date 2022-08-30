import { View, Text, Pressable, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";
import CurrencyIcon from "../../icons/CurrencyIcon";
import PiechartIcon from "../../icons/PiechartIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import SortingIcon from "../../icons/SortingIcon";

export default function MySubscriptionsSettings() {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.settingsHeader}>My subscriptions</Text>
      <View style={styles.settingsFieldView}>
        <View style={[styles.flexRowJustifySpaceBetween, { marginBottom: 15 }]}>
          <View style={styles.flexRowJustifyCenterAlignCenter}>
            <SortingIcon />
            <Text style={styles.settingsFieldName}>Sorting</Text>
          </View>

          <Pressable style={styles.flexRowJustifyCenterAlignCenter}>
            <Text style={styles.settingsFieldValue}>Date</Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>

        <View style={[styles.flexRowJustifySpaceBetween, { marginBottom: 15 }]}>
          <View style={styles.flexRowJustifyCenterAlignCenter}>
            <PiechartIcon />
            <Text style={styles.settingsFieldName}>Summary</Text>
          </View>

          <Pressable style={styles.flexRowJustifyCenterAlignCenter}>
            <Text style={styles.settingsFieldValue}>Average</Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>

        <View style={[styles.flexRowJustifySpaceBetween]}>
          <View style={styles.flexRowJustifyCenterAlignCenter}>
            <CurrencyIcon />
            <Text style={styles.settingsFieldName}>Default Currency</Text>
          </View>

          <Pressable style={styles.flexRowJustifyCenterAlignCenter}>
            <Text style={styles.settingsFieldValue}>USD ($)</Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  settingsHeader: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10,
  },
  settingsFieldView: {
    backgroundColor: "#25252c",
    borderRadius: 18,
    padding: 15,
  },
  settingsFieldName: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
    color: "#d7d7d9",
  },
  settingsFieldValue: {
    fontSize: 15,
    color: "#a2a2b5",
    marginRight: 10,
  },
  flexRowJustifySpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexRowJustifyCenterAlignCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
