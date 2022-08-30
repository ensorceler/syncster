import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppleIcon from "../../icons/AppleIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import { LinearGradient } from "expo-linear-gradient";

interface RegisterButtonPropsType {
  children: React.ReactNode;
  authProvider: string;
}

const GoogleSignup = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
        {
          elevation: 20,
          shadowColor: "#fff",
          shadowOffset: { width: 2, height: 2 },
        },
      ]}
    >
      <LinearGradient
        colors={["#f5f5f5", "#fff", "#f5f5f5"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 30,
        }}
      >
        <GoogleIcon />
        <Text style={{ fontWeight: "500", marginLeft: 10 }}>
          Sign up with Google
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const FacebookSignup = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
        {
          elevation: 20,
          shadowColor: "#2e7fe9",
          shadowOffset: { width: 2, height: 2 },
        },
      ]}
    >
      <LinearGradient
        colors={["#1771e6", "#2e7fe9", "#1771e6"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 30,
        }}
      >
        <FacebookIcon />
        <Text style={{ color: "white", fontWeight: "500", marginLeft: 10 }}>
          Sign up with Facebook
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const AppleSignup = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
        {
          elevation: 20,
          shadowColor: "#141414",
          shadowOffset: { width: 2, height: 2 },
        },
      ]}
    >
      <LinearGradient
        colors={["#000000", "#141414", "#000000"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 30,
        }}
      >
        <AppleIcon />
        <Text style={{ color: "white", fontWeight: "500", marginLeft: 10 }}>
          Sign up with Apple
        </Text>
      </LinearGradient>
    </Pressable>
  );
};
function EmailSignup() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.emailSignup,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <Text
        style={{
          fontWeight: "500",
          color: "white",
          textAlign: "center",
        }}
      >
        Sign up with E-mail
      </Text>
    </Pressable>
  );
}
function RegisterOptionsScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <AppleSignup />
      <GoogleSignup />
      <FacebookSignup />
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          textAlign: "center",
          fontSize: 18,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        or
      </Text>
      <EmailSignup />
      <View style={{ margin: 15 }}>
        <Text
          style={{ color: "#404046", textAlign: "center", fontWeight: "500" }}
        >
          By registering, you agree to our Terms of User. Learn how we collect,
          use and share your data.
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default RegisterOptionsScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#1c1c23",
  },
  imageBackground: {},
  button: {
    width: "80%",
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 30,
  },
  emailSignup: {
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
