import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const subscriptionListArr = [
  {
    name: "Spotify",
    price: "$5.99",
    icon_image_link: require("../../assets/images/spotify.png"),
  },
  {
    name: "Youtube Premium",
    price: "$18.99",
    icon_image_link: require("../../assets/images/youtube.png"),
  },
  {
    name: "Microsoft OneDrive",
    price: "$29.99",
    icon_image_link: require("../../assets/images/onedrive.png"),
  },
  {
    name: "Netflix",
    price: "$25.99",
    icon_image_link: require("../../assets/images/netflix.png"),
  },
  {
    name: "HBO GO",
    price: "$15.99",
    icon_image_link: require("../../assets/images/hbo_go.png"),
  },
];
const upcomingBillsListArr = [
  {
    name: "Spotify",
    price: "$5.99",
    date: "25-06-2022",
  },
  {
    name: "Youtube Premium",
    date: "25-06-2022",
    price: "$18.99",
  },
  {
    name: "Netflix",
    price: "$10.99",
    date: "25-06-2022",
  },
  {
    name: "HBO GO",
    price: "$12.99",
    date: "25-06-2022",
  },
];

const SubscriptionsList = () => {
  return (
    <ScrollView style={subsriptionsListStyle.listContainer}>
      {subscriptionListArr.map((item, index) => (
        <View key={index} style={subsriptionsListStyle.listItem}>
          <View style={subsriptionsListStyle.itemlogoNText}>
            <Image
              source={item.icon_image_link}
              style={{ height: 40, width: 40, marginRight: 15 }}
            />
            <Text style={subsriptionsListStyle.text}>{item.name}</Text>
          </View>
          <Text style={subsriptionsListStyle.text}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const UpcomingBillsList = () => {
  return (
    <ScrollView style={subsriptionsListStyle.listContainer}>
      {upcomingBillsListArr.map((item, index) => (
        <View key={index} style={subsriptionsListStyle.listItem}>
          <View style={subsriptionsListStyle.itemlogoNText}>
            <View
              style={{
                height: 40,
                width: 40,
                marginRight: 15,
                borderRadius: 17,
                backgroundColor: "#353542",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#a2a2b5",
                  marginBottom: -5,
                  fontWeight: "500",
                }}
              >
                Jun
              </Text>
              <Text
                style={{ fontSize: 18, color: "#a2a2b5", fontWeight: "500" }}
              >
                25
              </Text>
            </View>
            <Text style={subsriptionsListStyle.text}>{item.name}</Text>
          </View>
          <Text style={subsriptionsListStyle.text}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const HomeSubscriptionsList = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const showSubscriptions = () => {
    setActiveTab(0);
  };
  const showUpcomingBills = () => {
    setActiveTab(1);
  };

  return (
    <View style={styles.container}>
      {/* tabs */}
      <View style={styles.Tabs}>
        <Pressable onPress={showSubscriptions}>
          <View style={activeTab === 0 ? styles.activeTab : styles.inactiveTab}>
            <Text
              style={{
                color:
                  activeTab === 0
                    ? styles.activeTab.color
                    : styles.inactiveTab.color,
              }}
            >
              Your Subscriptions
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={showUpcomingBills}>
          <View style={activeTab === 1 ? styles.activeTab : styles.inactiveTab}>
            <Text
              style={{
                color:
                  activeTab === 1
                    ? styles.activeTab.color
                    : styles.inactiveTab.color,
              }}
            >
              Upcoming bills
            </Text>
          </View>
        </Pressable>
      </View>
      {activeTab === 0 ? <SubscriptionsList /> : <UpcomingBillsList />}
      <View style={{ height: 70 }}></View>
    </View>
  );
};

export default HomeSubscriptionsList;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  Tabs: {
    position: "relative",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#111115",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  activeTab: {
    backgroundColor: "#1a1a20",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#2e2e35",
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: "white",
    borderWidth: 1,
    borderColor: "#404046",
  },
  inactiveTab: {
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 40,
    color: "#a2a2b5",
  },
});

const subsriptionsListStyle = StyleSheet.create({
  listContainer: {
    marginTop: 15,
    elevation: 5,
  },
  listItem: {
    position: "relative",
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#2e2e35",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemlogoNText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: "#e4e4e5",
    fontSize: 17,
    marginRight: 10,
    fontWeight: "400",
  },
});
