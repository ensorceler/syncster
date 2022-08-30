import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SegmentedRoundDisplay from "react-native-segmented-round-display";
import SettingsIcon from "../../icons/SettingsIcon";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

const examples = [
  {
    radius: 125,
    filledArcWidth: 10,
    emptyArcWidth: 10,
    totalArcSize: 265,
    filledArcColor: "#fff",
    emptyArcColor: "#2e2e35",
    incompleteArcColor: "#ff7966",
    animationDuration: 1000,
    segments: [
      {
        total: 100,
        filled: 80,
      },
    ],
  },
];

const BudgetButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.budgetButton,
        { transform: [{ scale: pressed ? 0.95 : 1 }] },
      ]}
    >
      <Text style={{ color: styles.budgetButton.color }}>See your budget</Text>
    </Pressable>
  );
};

const ShowBudget = () => {
  const totalBudget = 1235;
  return (
    <View style={styles.ShowBudgetContainer}>
      <Text style={styles.showBudgetTitle}>
        ${totalBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
      <Text
        style={{ color: "#666680", fontWeight: "500", textAlign: "center" }}
      >
        This month bills
      </Text>
    </View>
  );
};

function InnerDottedArc() {
  return (
    <Svg
      style={{ position: "absolute", top: 55 }}
      width={200}
      height={200}
      fill="none"
      viewBox="0 0 230 197"
    >
      <Path
        opacity={0.5}
        d="M35.097 194.903a112.999 112.999 0 0 1 142.682-173.86 112.998 112.998 0 0 1 17.124 173.86"
        stroke="#4E4E61"
        strokeWidth={3.034}
        strokeMiterlimit={4.81}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0 0.1 0 15"
      />
    </Svg>
  );
}

function OuterDottedArc() {
  return (
    <Svg
      style={{ position: "absolute" }}
      width={329}
      height={329}
      fill="none"
      viewBox="0 0 329 329"
    >
      <Circle
        opacity={0.05}
        cx={164.5}
        cy={164.5}
        r={162.5}
        stroke="#fff"
        strokeWidth={2.944}
        strokeMiterlimit={4.81}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0 0.1 0 7.85"
      />
    </Svg>
  );
}

const TrackingSegmentArea = () => {
  return (
    <View style={styles.container}>
      <View style={[{ zIndex: 1, position: "absolute", top: 20, right: 20 }]}>
        <SettingsIcon />
      </View>

      <SegmentedRoundDisplay {...examples[0]} />
      <ShowBudget />
      <BudgetButton />
      <InnerDottedArc />
    </View>
  );
};

export default TrackingSegmentArea;
const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: "#fff",
    position: "relative",
    display: "flex",
    //backgroundColor: "#212127",
    justifyContent: "center",
    alignItems: "center",
  },
  budgetButton: {
    elevation: 5,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#404046",
    position: "absolute",
    top: 245,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#27272e",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ShowBudgetContainer: {
    position: "absolute",
  },
  showBudgetTitle: {
    fontSize: 40,
    color: "white",
    fontWeight: "600",
  },
});
