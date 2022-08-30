import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import SettingsIcon from "../../icons/SettingsIcon";
import SubscriptionStats from "./SubscriptionStats";
import TrackingSegmentArea from "./TrackingSegmentArea";

const HomeTrackingChart = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#1b1b21",
          "#1b1b22",
          "#1c1c23",
          "#212127",
          "#23232a",
          "#25252c",
          "#27272e",
        ]}
        style={styles.container}
      >
        <TrackingSegmentArea />
        <SubscriptionStats />
      </LinearGradient>
    </View>
  );
};

export default HomeTrackingChart;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#23232a",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  text: {
    color: "#fff",
  },
});
