import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

/*
inputColor & inputLabel color => #89898d

*/

const PasswordStrengthMeter = () => {
  return (
    <View
      style={{
        //borderWidth: 1,
        //borderColor: "#fff",
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          height: 5,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          flex: 1,
          marginRight: 10,
          backgroundColor: "#2e2e35",
        }}
      ></View>

      <View
        style={{
          height: 5,
          flex: 1,
          marginRight: 10,
          backgroundColor: "#2e2e35",
        }}
      ></View>

      <View
        style={{
          height: 5,
          flex: 1,
          marginRight: 10,
          backgroundColor: "#2e2e35",
        }}
      ></View>

      <View
        style={{
          height: 5,
          flex: 1,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: "#2e2e35",
        }}
      ></View>
    </View>
  );
};

const RegisterButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.getStartedButton,
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <LinearGradient
        colors={["#ff7966", "#ff998b", "#ff7966"]}
        style={{
          borderRadius: 30,
          paddingVertical: 15,
        }}
      >
        <Text
          style={{ textAlign: "center", fontWeight: "500", color: "white" }}
        >
          Get Started, it's free
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        {/** email address */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email address</Text>
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
          }}
        >
          <PasswordStrengthMeter />
          <Text
            style={{
              color: "#89898d",
              fontSize: 13,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "left",
            }}
          >
            Use 8 or more characters with a mix of letters,numbers and symbols
          </Text>
        </View>

        {/** button get started */}
        <RegisterButton />
      </View>

      {/** already have an account */}
      <View style={styles.edgeContainer}>
        <Text style={styles.edgeContainerText}>
          Do you already have an account?
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.signinButton,
            { transform: [{ scale: pressed ? 0.95 : 1 }] },
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signinButtonText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  getStartedButton: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    elevation: 15,
    borderRadius: 30,
    shadowColor: "#ffd2cc",
    shadowOffset: { width: 2, height: 2 },
  },

  signinButton: {
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
  signinButtonText: {
    fontWeight: "500",
    color: "#e6e6e6",
    textAlign: "center",
  },
});
