import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewCard from "../../components/creditcard/AddNewCard";
import SavedCard from "../../components/creditcard/SavedCard";

const CreditCardScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <SavedCard />
      <AddNewCard />
    </SafeAreaView>
  );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    backgroundColor: "#1c1c23",
  },
});
