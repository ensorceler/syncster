import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
    name: "Netflix",
    price: "$25.99",
    icon_image_link: require("../../assets/images/netflix.png"),
  },
  {
    name: "Netflix",
    price: "$25.99",
    icon_image_link: require("../../assets/images/netflix.png"),
  },
  {
    name: "Netflix",
    price: "$25.99",
    icon_image_link: require("../../assets/images/netflix.png"),
  },
  {
    name: "Netflix",
    price: "$25.99",
    icon_image_link: require("../../assets/images/netflix.png"),
  },
];

const SubscriptionCard = ({
  name,
  price,
  icon_image_link,
}: typeof subscriptionListArr[0]) => {
  return (
    <View
      style={{
        width: "47%",
        height: 150,
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "#26262f",
        borderRadius: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Image source={icon_image_link} style={{ height: 35, width: 35 }} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "500", color: "#ededee" }}>{name}</Text>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#ededee" }}>
          {price}
        </Text>
      </View>
    </View>
  );
};

const SubscriptionThisMonth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateAndBills}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ color: "#ededee", fontWeight: "600", fontSize: 20 }}>
            January
          </Text>
          <Text style={{ color: "#a2a2b5", fontSize: 13, fontWeight: "500" }}>
            01.08.22
          </Text>
        </View>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ color: "#ededee", fontWeight: "600", fontSize: 20 }}>
            $24.98
          </Text>
          <Text style={{ color: "#a2a2b5", fontSize: 13, fontWeight: "500" }}>
            in upcoming bills
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {subscriptionListArr.map((item, index) => (
          <SubscriptionCard key={index} {...item} />
        ))}
      </ScrollView>
      <View style={{ height: 70, backgroundColor: "transparent" }}></View>
    </View>
  );
};

export default SubscriptionThisMonth;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  dateAndBills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
