import { StyleSheet, View, Text } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

interface StylePropsType {
  color?: string;
  size?: number;
}

export default function RectangleIcon({}: StylePropsType) {
  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      {/** @ts-ignore */}
      <G clipPath="url(#a)">
        <Path
          d="M15.833 0H4.167A4.167 4.167 0 0 0 0 4.167v11.666A4.166 4.166 0 0 0 4.167 20h11.666A4.166 4.166 0 0 0 20 15.833V4.167A4.167 4.167 0 0 0 15.833 0Zm2.5 15.833a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v11.666Z"
          fill="#C1C1CD"
        />
      </G>
      <Defs>
        {/** @ts-ignore */}
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
