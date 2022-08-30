import { Modal, View, StyleSheet, Text, Pressable } from "react-native";
import CloseIcon from "../../icons/CloseIcon";
interface PropsType {
  modalVisible: boolean;
  setModalVisible: Function;
}
export default function FieldChangeModal({
  modalVisible,
  setModalVisible,
}: PropsType) {
  function closeModal() {
    setModalVisible(false);
  }
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      presentationStyle={"overFullScreen"}
    >
      <View style={styles.modalView}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              { transform: [{ scale: pressed ? 0.95 : 1 }] },
            ]}
            onPress={closeModal}
          >
            <CloseIcon />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    height: "40%",
    backgroundColor: "#1c1c23",
    opacity: 0.7,
    width: "80%",
    top: "25%",
    left: "10%",
    borderRadius: 30,
    padding: 10,
  },
});
