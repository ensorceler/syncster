import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function WelcomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: "flex-end" }}
        source={require("../../assets/images/welcome.png")}
        resizeMode="cover"
      >
        <Pressable
          style={({ pressed }) => [
            styles.getStartedButton,
            { transform: [{ scale: pressed ? 0.95 : 1 }] },
          ]}
          onPress={() => navigation.navigate("Register")}
        >
          <LinearGradient
            colors={["#ff7966", "#ff8472", "#ff7966"]}
            style={{
              paddingVertical: 15,
            }}
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.haveAccountButton,
            { transform: [{ scale: pressed ? 0.95 : 1 }] },
          ]}
          onPress={() => navigation.navigate("RegisterOptions")}
        >
          <Text style={styles.getStartedButtonText}>I have an account</Text>
        </Pressable>
      </ImageBackground>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c23" />
    </SafeAreaView>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {},
  getStartedButton: {
    width: "80%",
    borderRadius: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    overflow: "hidden",
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#ffa699",
  },
  getStartedButtonText: {
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  haveAccountButton: {
    width: "80%",
    borderRadius: 30,
    paddingVertical: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    backgroundColor: "#2e2e35",
    overflow: "hidden",
    elevation: 5,
    borderColor: "#404046",
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
});
