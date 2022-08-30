import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon";
import CarouselSwipe from "./CarouselSwipe";
const assets = [
  {
    logo: require("../../assets/images/hbo_go.png"),
    name: "HBO GO",
  },
  {
    logo: require("../../assets/images/spotify.png"),
    name: "Spotify",
  },
  {
    name: "Youtube Premium",
    logo: require("../../assets/images/youtube.png"),
  },
  {
    name: "Netflix",
    logo: require("../../assets/images/netflix.png"),
  },
];

const SubscriptionSwipe = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <BackArrowIcon navigateBack={navigateBack} />
      <Text style={styles.titleText}>New</Text>

      <View style={styles.header}>
        <Text style={[styles.headerText, { marginBottom: -15 }]}>Add new</Text>
        <Text style={styles.headerText}>Subscription</Text>
      </View>
      <CarouselSwipe />
    </View>
  );
};

export default SubscriptionSwipe;
const styles = StyleSheet.create({
  mainContainer: {
    height: "50%",
    backgroundColor: "#25252c",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "600",
    color: "#f6f6f6",
  },
  titleText: {
    color: "#a2a2b5",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
  subscriptionItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subscriptionItemText: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
});
