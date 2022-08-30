import { View, StyleSheet, Image, Text, Pressable } from "react-native";

interface BudgetListType {
  totalAmount: number;
  totalExpense: number;
  categoryName: string;
  categoryIcon: any;
}
const BudgetListItemsArr = [
  {
    totalAmount: 400,
    totalExpense: 25.99,
    categoryName: "Auto & Transport",
    categoryIcon: require("../../assets/images/car.png"),
  },
  {
    totalAmount: 600,
    totalExpense: 50.99,
    categoryName: "Entertainment",
    categoryIcon: require("../../assets/images/glitter.png"),
  },
  {
    totalAmount: 600,
    totalExpense: 5.99,
    categoryName: "Security",
    categoryIcon: require("../../assets/images/fingerprint.png"),
  },
];

const BudgetListCard = (props: BudgetListType) => {
  return (
    <View style={styles.budgetsCardView}>
      <View style={styles.budgetLogoNTitle}>
        <Image
          source={props.categoryIcon}
          style={{ height: 30, width: 30, marginRight: 10 }}
        />
        <View style={{ display: "flex" }}>
          <Text style={{ color: "#fff", fontWeight: "500" }}>
            {props.categoryName}
          </Text>
          <Text style={{ color: "#7d7d97", fontWeight: "400" }}>
            {props.totalAmount - props.totalExpense} left to spend
          </Text>
        </View>
      </View>
      <View style={{ display: "flex", justifyContent: "flex-end" }}>
        <Text style={{ color: "#fff", fontWeight: "500" }}>
          {props.totalExpense}
        </Text>
        <Text style={{ color: "#666680", fontWeight: "400" }}>
          of {props.totalAmount}
        </Text>
      </View>
    </View>
  );
};

const BudgetList = () => {
  return (
    <View style={styles.container}>
      {BudgetListItemsArr.map((item, index) => (
        <BudgetListCard key={index} {...item} />
      ))}

      <Pressable
        style={({ pressed }) => [
          styles.addNewCategory,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.addNewCategoryText}>Add new category</Text>
          <Image
            source={require("../../assets/images/circled_plus.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default BudgetList;
const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  budgetsCardView: {
    position: "relative",
    elevation: 10,
    backfaceVisibility: "hidden",
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    borderLeftWidth: 1,
    borderColor: "#333339",
    backgroundColor: "#202028",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetLogoNTitle: {
    display: "flex",
    flexDirection: "row",
  },
  addNewCategory: {
    marginTop: 5,
    paddingVertical: 25,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#c1c1cd",
  },
  addNewCategoryText: {
    color: "#A2A2B5",
    fontWeight: "500",
    fontSize: 15,
    marginRight: 5,
  },
});
