import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon";

export default function SettingsHeader() {
  const navigation = useNavigation<any>();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <BackArrowIcon navigateBack={navigateBack} size={24} color="#a2a2b5" />
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "#a2a2b5",
          textAlign: "center",
        }}
      >
        Settings
      </Text>
    </View>
  );
}
