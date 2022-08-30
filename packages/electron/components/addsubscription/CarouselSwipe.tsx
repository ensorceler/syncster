import { Dimensions, Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

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

export default function CarouselSwipe() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={width}
        height={width}
        data={assets}
        mode="parallax"
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        modeConfig={{
          parallaxScrollingScale: 0.7,
          parallaxScrollingOffset: 150,
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 250,
              backgroundColor: "#222228",
              borderRadius: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item.logo}
              style={{
                marginBottom: 20,
              }}
            />
            <Text style={{ textAlign: "center", fontSize: 25, color: "#fff" }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
