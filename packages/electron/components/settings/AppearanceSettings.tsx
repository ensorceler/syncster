import { View, Text, Pressable, StyleSheet } from "react-native";
import RectangleIcon from "../../icons/RectangleIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import ThemeIcon from "../../icons/ThemeIcon";

export default function AppearanceSettings() {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.settingsHeader}>Appearance</Text>

      <View style={styles.settingsFieldView}>
        <View style={[styles.flexRowJustifySpaceBetween, { marginBottom: 15 }]}>
          <View style={styles.flexRowJustifyCenterAlignCenter}>
            <RectangleIcon />
            <Text style={styles.settingsFieldName}>App Icon</Text>
          </View>

          <Pressable style={styles.flexRowJustifyCenterAlignCenter}>
            <Text style={styles.settingsFieldValue}>Default</Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>

        <View style={[styles.flexRowJustifySpaceBetween]}>
          <View style={styles.flexRowJustifyCenterAlignCenter}>
            <ThemeIcon />
            <Text style={styles.settingsFieldName}>Theme</Text>
          </View>

          <Pressable style={styles.flexRowJustifyCenterAlignCenter}>
            <Text style={styles.settingsFieldValue}>Dark</Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  settingsHeader: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10,
  },
  settingsFieldView: {
    backgroundColor: "#25252c",
    borderRadius: 18,
    padding: 15,
  },
  settingsFieldName: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
    color: "#d7d7d9",
  },
  settingsFieldValue: {
    fontSize: 15,
    color: "#a2a2b5",
    marginRight: 10,
  },
  flexRowJustifySpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexRowJustifyCenterAlignCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
