import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { authenticated } from "../../context/AuthStore";
import { useAtom } from "jotai";

const LoginButton = () => {
  const [Auth, setAuth] = useAtom(authenticated);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.loginButton,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      onPress={() => setAuth("yess")}
    >
      <LinearGradient
        colors={["#ff7966", "#ff998b", "#ff7966"]}
        style={styles.loginButtonGradient}
      >
        <Text
          style={{ textAlign: "center", fontWeight: "500", color: "white" }}
        >
          Sign In
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const LoginScreen = () => {
  const navigator = useNavigation<any>();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        {/** email address */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Login</Text>
          <TextInput style={styles.textInput} />
        </View>
        {/** password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View
          style={{
            margin: 15,
            marginLeft: 25,
            marginRight: 25,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <BouncyCheckbox
              fillColor="#ff7966"
              size={18}
              style={{}}
              innerIconStyle={{ borderRadius: 2 }}
              iconStyle={{ borderRadius: 2, borderColor: "#ff7966" }}
              isChecked={false}
              useNativeDriver={true}
            />
            <Text style={{ color: "#89898d" }}>Remember Me</Text>
          </View>
          <Text style={{ color: "#89898d" }}>Forgot Password</Text>
        </View>

        {/** button to login*/}
        <LoginButton />
      </View>

      {/** already have an account */}
      <View style={styles.edgeContainer}>
        <Text style={styles.edgeContainerText}>
          If you don't have an account yet ?
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.signupButton,
            { transform: [{ scale: pressed ? 0.95 : 1 }] },
          ]}
          onPress={() => navigator.navigate("Register")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#1c1c23",
  },

  centeredContainer: {},
  edgeContainer: {
    marginBottom: 10,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  edgeContainerText: {
    color: "#dbdbdc",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "300",
  },
  inputContainer: {
    display: "flex",
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  inputLabel: {
    color: "#89898d",
    fontWeight: "500",
    marginBottom: 5,
  },
  textInput: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#2a2a30",
    color: "#89898d",
  },
  loginButton: {
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 30,
    //borderWidth: 1,
    //borderColor: "#fff",
    elevation: 20,
    shadowColor: "#ff8472",
    shadowOffset: { width: 2, height: 2 },
  },
  loginButtonGradient: {
    borderRadius: 30,
    paddingVertical: 15,
  },

  signupButton: {
    width: "85%",
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
  signupButtonText: {
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
