import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SettingsIcon from "../../icons/SettingsIcon";
import RNPickerSelect from "react-native-picker-select";
import Svg, { Path } from "react-native-svg";

const monthsArr = [
  {
    label: "January",
    value: 1,
  },
  {
    label: "February",
    value: 2,
  },
  {
    label: "March",
    value: 3,
  },
  {
    label: "April",
    value: 4,
  },
  {
    label: "May",
    value: 5,
  },
  {
    label: "June",
    value: 6,
  },
  {
    label: "July",
    value: 7,
  },
  {
    label: "August",
    value: 8,
  },
  {
    label: "September",
    value: 9,
  },
  {
    label: "October",
    value: 10,
  },
  {
    label: "November",
    value: 11,
  },
  {
    label: "December",
    value: 12,
  },
];

const MonthPickerSelect = () => {
  const [selectedMonth, setSelectedMonth] = React.useState<number>(1);
  return (
    <View
      style={{
        width: 105,
        borderRadius: 30,
        backgroundColor: "#2d2d35",
      }}
    >
      <RNPickerSelect
        style={{
          placeholder: {
            color: "#ededee",
          },
          iconContainer: {
            top: 18,
            right: 10,
          },
          inputAndroid: {
            color: "#ededee",
            padding: 10,
            left: 5,
          },
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value: number) => {
          setSelectedMonth(value);
        }}
        itemKey={"value"}
        value={selectedMonth}
        items={monthsArr}
        //@ts-ignore
        Icon={() => {
          return (
            <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <Path
                d="M9.35491 4.10505C9.30843 4.05819 9.25313 4.02099 9.1922 3.99561C9.13127 3.97022 9.06591 3.95715 8.99991 3.95715C8.9339 3.95715 8.86855 3.97022 8.80762 3.99561C8.74669 4.02099 8.69139 4.05819 8.64491 4.10505L6.35491 6.39505C6.30843 6.44191 6.25313 6.47911 6.1922 6.50449C6.13127 6.52988 6.06591 6.54295 5.99991 6.54295C5.9339 6.54295 5.86855 6.52988 5.80762 6.50449C5.74669 6.47911 5.69139 6.44191 5.64491 6.39505L3.35491 4.10505C3.30843 4.05819 3.25313 4.02099 3.1922 3.99561C3.13127 3.97022 3.06591 3.95715 2.99991 3.95715C2.9339 3.95715 2.86855 3.97022 2.80762 3.99561C2.74669 4.02099 2.69139 4.05819 2.64491 4.10505C2.55178 4.19873 2.49951 4.32546 2.49951 4.45755C2.49951 4.58964 2.55178 4.71637 2.64491 4.81005L4.93991 7.10505C5.22116 7.38595 5.60241 7.54373 5.99991 7.54373C6.39741 7.54373 6.77866 7.38595 7.05991 7.10505L9.35491 4.81005C9.44803 4.71637 9.50031 4.58964 9.50031 4.45755C9.50031 4.32546 9.44803 4.19873 9.35491 4.10505Z"
                fill="white"
              />
            </Svg>
          );
        }}
      />
    </View>
  );
};

const DateCard = ({ date }: { date: number }) => {
  return (
    <View style={styles.dateCardView}>
      <Text style={styles.dateCardDate}>{"0" + date}</Text>
      <Text style={styles.dateCardDay}>Mo</Text>
    </View>
  );
};
const ScheduleCalendar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: 15,
          right: 20,
        }}
      >
        <SettingsIcon />
      </View>

      <Text style={styles.header}>Calendar</Text>

      <View style={styles.subsSchedule}>
        <Text style={[styles.subsScheduleText, { marginBottom: -10 }]}>
          Subs
        </Text>
        <Text style={styles.subsScheduleText}>Schedule</Text>
      </View>

      <View
        style={{
          //borderWidth: 1,
          //borderColor: "#fff",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#a2a2b5", fontSize: 15, fontWeight: "500" }}>
          3 subscriptions for today
        </Text>
        <MonthPickerSelect />
      </View>

      <ScrollView style={{ marginTop: 10 }} horizontal={true}>
        {Array.from(Array(30).keys()).map((item, index) => (
          <DateCard date={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScheduleCalendar;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "45%",
    padding: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    //backgroundColor: "#212127",
    backgroundColor: "#22222b",
  },
  header: {
    fontSize: 16,
    color: "#a2a2b5",
    textAlign: "center",
  },
  subsSchedule: {
    marginTop: 30,
    //borderWidth: 1,
    //borderColor: "#fff",
    display: "flex",
    alignItems: "flex-start",
  },
  subsScheduleText: {
    padding: 0,
    margin: 0,
    fontSize: 40,
    fontWeight: "600",
    color: "#ededee",
  },

  dateCardView: {
    marginRight: 10,
    height: 115,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "#2a2a33",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#2b2b33",
  },
  dateCardDate: {
    color: "#ededee",
    fontWeight: "600",
    fontSize: 20,
  },
  dateCardDay: {
    color: "#a2a2b5",
  },
});
