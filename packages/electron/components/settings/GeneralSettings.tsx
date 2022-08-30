import { View, Text, Pressable, Switch } from "react-native";
import CloudIcon from "../../icons/CloudIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import SecurityFaceIDIcon from "../../icons/SecurityFaceIDIcon";
import React from "react";

export default function GeneralSettings() {
  const [iCloudSync, setICloudSync] = React.useState<boolean>(false);
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        General
      </Text>
      <View
        style={{
          backgroundColor: "#25252c",
          borderRadius: 18,
          padding: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SecurityFaceIDIcon />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "500",
                fontSize: 16,
                color: "#d7d7d9",
              }}
            >
              Security
            </Text>
          </View>

          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#a2a2b5", marginRight: 10 }}>
              FaceID
            </Text>
            <RightArrowIcon color="#a2a2b5" />
          </Pressable>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CloudIcon />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "500",
                fontSize: 16,
                color: "#d7d7d9",
              }}
            >
              iCloud Sync
            </Text>
          </View>

          <Switch
            onChange={() => {
              setICloudSync(!iCloudSync);
            }}
            value={iCloudSync}
            thumbColor={"white"}
            trackColor={{ false: "grey", true: "teal" }}
          />
        </View>
      </View>
    </View>
  );
}
