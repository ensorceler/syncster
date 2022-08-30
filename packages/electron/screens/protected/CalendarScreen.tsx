import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScheduleCalendar from "../../components/calendarscreen/ScheduleCalendar";
import SubscriptionThisMonth from "../../components/calendarscreen/SubscriptionThisMonth";

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScheduleCalendar />
      <SubscriptionThisMonth />
    </SafeAreaView>
  );
};

export default CalendarScreen;
const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    backgroundColor: "#1c1c23",
  },
});
