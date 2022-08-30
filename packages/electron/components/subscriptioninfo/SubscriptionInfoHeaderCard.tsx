import { Image, StyleSheet, Text, View } from "react-native";
import DownArrowIcon from "../../icons/DownArrowIcon";
import TrashbinIcon from "../../icons/TrashbinIcon";

export default function SubscriptionInfoHeaderCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerItemsView}>
        <DownArrowIcon color="#a2a2b5" />
        <Text style={styles.headerText}>Subscription info</Text>
        <TrashbinIcon />
      </View>

      <View style={styles.logoArea}>
        <Image
          source={require("../../assets/images/spotify.png")}
          style={styles.logoAreaImage}
        />
        <Text style={styles.subscriptionName}> Spotify</Text>
        <Text style={styles.subscriptionPrice}>$5.99</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "40%",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 30,
    paddingVertical: 20,
    backgroundColor: "#353542",
  },
  headerItemsView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 16,
    color: "#a2a2b5",
  },

  logoArea: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoAreaImage: {
    height: 120,
    width: 120,
  },
  subscriptionName: {
    marginTop: 20,
    color: "white",
    fontSize: 35,
    fontWeight: "500",
  },
  subscriptionPrice: {
    marginTop: 10,
    color: "#a2a2b5",
    fontSize: 20,
    fontWeight: "500",
  },
});
