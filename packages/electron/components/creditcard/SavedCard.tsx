import { Image, Settings, StyleSheet, Text, View } from "react-native";
import SettingsIcon from "../../icons/SettingsIcon";

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
const SavedCard = () => {
  return (
    <View style={styles.container}>
      <SettingsIcon />
      <Text style={styles.header}>Credit Cards</Text>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/creditcard.png")}
          style={{ height: 420, width: 275 }}
        />
      </View>

      <View style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
        <Text style={{ color: "#ededee", fontSize: 17, fontWeight: "500" }}>
          Subscriptions
        </Text>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {subscriptionListArr.map((item, index) => (
            <Image
              key={index}
              source={item.icon_image_link}
              style={{ height: 35, width: 35, marginRight: 10 }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default SavedCard;
const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: "#fff",
    position: "relative",
  },
  header: {
    marginTop: 20,
    fontSize: 15,
    color: "#a2a2b5",
    textAlign: "center",
  },
});
