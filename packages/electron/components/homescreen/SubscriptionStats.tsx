import React from "react";
import { View, StyleSheet, Text } from "react-native";
const SubscriptionStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subsView}>
        <View
          style={[
            styles.subsViewTopLayer,
            {
              backgroundColor: "#ffa699",
            },
          ]}
        ></View>
        <Text style={styles.subsViewTitle}>Active Subs</Text>
        <Text style={styles.subViewText}>12</Text>
      </View>

      <View style={styles.subsView}>
        <View
          style={[
            styles.subsViewTopLayer,
            {
              backgroundColor: "#7dffee",
            },
          ]}
        ></View>
        <Text style={styles.subsViewTitle}>Highest Subs</Text>
        <Text style={styles.subViewText}>$19.99</Text>
      </View>

      <View style={styles.subsView}>
        <View
          style={[
            styles.subsViewTopLayer,
            {
              backgroundColor: "#7722ff",
            },
          ]}
        ></View>
        <Text style={styles.subsViewTitle}>Lowest Subs</Text>
        <Text style={styles.subViewText}>$5.99</Text>
      </View>
    </View>
  );
};

export default SubscriptionStats;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    //borderWidth: 2,
    //borderColor: "#fff",
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subsView: {
    elevation: 2,
    position: "relative",
    marginLeft: 10,
    backgroundColor: "#27272e",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderLeftWidth: 1,
    borderLeftColor: "#404046",
  },
  subsViewTitle: {
    fontWeight: "600",
    color: "#83839C",
  },
  subViewText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  subsViewTopLayer: {
    borderRadius: 5,
    position: "absolute",
    height: 1,
    left: 20,
    width: "70%",
    opacity: 0.5,
  },
});
