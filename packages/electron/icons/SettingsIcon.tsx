import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
interface PropType {
  color?: string;
  size?: number;
}
const SettingsIcon = ({ size }: PropType) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }] }]}
      onPress={() => {
        navigation.navigate("Settings");
      }}
    >
      <Svg fill="none" viewBox="0 0 24 24" height={24} width={24}>
        {/*@ts-ignore */}
        <G clipPath="url(#a)" fill="#A2A2B5">
          <Path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-3.999 2 2 0 0 1 0 4Z" />
          <Path d="m21.294 13.9-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 0 0 .328-4.98 3.001 3.001 0 0 0-3.328-.22l-.445.257A8.976 8.976 0 0 0 15 3.513V3a3 3 0 1 0-6 0v.513a8.977 8.977 0 0 0-2.848 1.646L5.705 4.9a3.002 3.002 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256a3.002 3.002 0 0 0 3 5.2l.445-.257A8.976 8.976 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a8.976 8.976 0 0 0 2.848-1.646l.447.258a3.002 3.002 0 0 0 3-5.2l-.001.001Zm-2.548-3.776a7.047 7.047 0 0 1 0 3.75 1 1 0 0 0 .464 1.133l1.084.626a1 1 0 1 1-1 1.733l-1.086-.628a1 1 0 0 0-1.215.165 6.983 6.983 0 0 1-3.243 1.875 1 1 0 0 0-.751.969V21a1 1 0 1 1-2 0v-1.252a1 1 0 0 0-.751-.969A6.984 6.984 0 0 1 7.006 16.9a1 1 0 0 0-1.215-.165l-1.084.627a1 1 0 1 1-1-1.732l1.084-.626a1 1 0 0 0 .464-1.133 7.048 7.048 0 0 1 0-3.75 1 1 0 0 0-.465-1.129l-1.084-.626a1 1 0 0 1 1-1.733l1.086.628A1 1 0 0 0 7.006 7.1a6.984 6.984 0 0 1 3.243-1.875A1 1 0 0 0 11 4.252V3a1 1 0 0 1 2 0v1.252a1 1 0 0 0 .751.969A6.983 6.983 0 0 1 16.994 7.1a1 1 0 0 0 1.215.165l1.084-.627a1 1 0 1 1 1 1.732l-1.084.626a1 1 0 0 0-.463 1.129v-.001Z" />
        </G>
        <Defs>
          {/*@ts-ignore */}
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};
export default SettingsIcon;
