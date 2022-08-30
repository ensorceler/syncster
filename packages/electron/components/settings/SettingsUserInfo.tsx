import { Image, Pressable, Text, View } from "react-native";

export default function SettingsUserInfo() {
  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg",
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
        <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
          John Doe
        </Text>
        <Text style={{ color: "white", fontWeight: "500", fontSize: 12 }}>
          j.doe@gmail.com
        </Text>

        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: "#25252c",
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: "white" }}>Edit Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}
