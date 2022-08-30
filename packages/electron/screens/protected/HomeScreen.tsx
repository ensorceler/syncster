import { useIsFocused } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  StatusBar,
  StatusBarStyle,
  ColorValue,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeSubscriptionsList from "../../components/homescreen/HomeSubscriptionsList";
import HomeTrackingChart from "../../components/homescreen/HomeTrackingChart";
import { ProtectedStackScreenProps } from "../../types";

interface StatusBarPropsType {
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
}
function FocusAwareStatusBar(props: StatusBarPropsType) {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      backgroundColor={props.backgroundColor}
      barStyle={props.barStyle}
    />
  ) : null;
}

const HomeScreen = ({ navigation }: ProtectedStackScreenProps<"Home">) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeTrackingChart />
      <HomeSubscriptionsList />
      <FocusAwareStatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1c1c23",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#9ca3af",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
