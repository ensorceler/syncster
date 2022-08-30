import { Text, View, StatusBar, StyleSheet, Pressable } from "react-native";

const AddNewCard = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.newCardButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <Text style={styles.buttonText}>Add New Card</Text>
      </Pressable>
    </View>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#26262f",
    borderRadius: 20,
  },
  newCardButton: {
    margin: 20,
    borderRadius: 10,
    borderStyle: "dashed",
    paddingVertical: 10,
    borderColor: "#4e4e61",
    borderWidth: 1,
  },
  buttonText: {
    color: "#a2a2b5",
    textAlign: "center",
  },
});
