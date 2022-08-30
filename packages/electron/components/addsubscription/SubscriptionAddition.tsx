import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import React from "react";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const IncreasePriceButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          borderRadius: 20,
          height: 50,
          width: 50,
          backgroundColor: "#25252c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth: 1,
          borderColor: "#404046",
          elevation: 5,
        },
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <PlusIcon color="#a2a2b5" />
    </Pressable>
  );
};

const DecreasePriceButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          borderRadius: 20,
          height: 50,
          width: 50,
          backgroundColor: "#25252c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth: 1,
          borderColor: "#404046",
          elevation: 5,
        },
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <MinusIcon color="#a2a2b5" />
    </Pressable>
  );
};

const SubscriptionAddition = () => {
  const [descriptionText, setDescriptionText] = React.useState<string>();
  const navigation = useNavigation<any>();
  const changeDescription = (e: any) => {
    console.log(e);
    console.log(typeof e);
  };
  return (
    <View style={styles.container}>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionLabel}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          onChange={changeDescription}
          keyboardType="default"
        />
      </View>

      <View style={styles.monthlyPriceView}>
        <Text style={styles.monthlyPriceLabel}>Monthly Price</Text>

        <View style={styles.flexContainer}>
          <DecreasePriceButton />
          <TextInput style={styles.monthlyPriceInput} value={"$5.99"} />
          <IncreasePriceButton />
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          {
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
        onPress={() => {
          navigation.navigate("SubscriptionInfo");
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#ff7966", "#ffa699", "#ff7966"]}
          style={styles.addPlatformButton}
        >
          <Text style={styles.addPlatformButtonText}>Add this Platform</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default SubscriptionAddition;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  descriptionView: {
    margin: 15,
  },
  descriptionLabel: {
    textAlign: "center",
    color: "#a2a2b5",
    fontWeight: "500",
    marginBottom: 5,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#2e2e35",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: "#f6f6f6",
  },

  monthlyPriceView: {},
  monthlyPriceLabel: {
    textAlign: "center",
    color: "#a2a2b5",
    fontWeight: "500",
    marginBottom: 5,
  },
  monthlyPriceInput: {
    minWidth: 150,
    borderBottomWidth: 1,
    borderColor: "#2e2e35",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    color: "#f6f6f6",
    fontSize: 20,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  addPlatformButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
    paddingVertical: 18,
    borderRadius: 30,
    backgroundColor: "#ff7966",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#ffa699",
  },
  addPlatformButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
