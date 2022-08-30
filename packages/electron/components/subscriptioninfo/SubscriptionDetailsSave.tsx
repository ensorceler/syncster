import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RightArrowIcon from "../../icons/RightArrowIcon";
import FieldChangeModal from "./FieldChangeModal";

const customizableFields = [
  {
    field_name: "Name",
    field_value: "Spotify",
  },

  {
    field_name: "Description",
    field_value: "Music App",
  },
  {
    field_name: "Category",
    field_value: "Entertainment",
  },
  {
    field_name: "First payment",
    field_value: "08.01.2022",
  },
  {
    field_name: "Reminder",
    field_value: "Never",
  },
  {
    field_name: "Currency",
    field_value: "USD ($)",
  },
];

function CustomizableFields({
  item,
  setModalVisible,
}: {
  item: typeof customizableFields[0];
  setModalVisible: Function;
}) {
  function helloModal() {
    [0].flat();
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 18, color: "#d7d7d9" }}>
        {item.field_name}
      </Text>

      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 15, color: "#a2a2b5", marginRight: 10 }}>
          {item.field_value}
        </Text>
        <RightArrowIcon color="#a2a2b5" />
      </Pressable>
    </View>
  );
}

export default function SubscriptionDetailsSave() {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FieldChangeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.subscriptionDetailsInputs}>
        {customizableFields.map((item, index) => (
          <CustomizableFields
            setModalVisible={setModalVisible}
            item={item}
            key={index}
          />
        ))}
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.saveButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    backgroundColor: "#262630",
    borderRadius: 30,
    flex: 1,
  },
  subscriptionDetailsInputs: {
    height: "80%",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2d2d38",
    display: "flex",
    justifyContent: "space-around",
  },
  saveButton: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 15,
    backgroundColor: "#31313d",
  },
  saveButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#a2a2b5",
  },
});
