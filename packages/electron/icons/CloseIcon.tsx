import Svg, { Path } from "react-native-svg";

interface StylePropsType {
  size?: number;
  color?: string;
}

export default function CloseIcon({}: StylePropsType) {
  return (
    <Svg width="30" height="30" viewBox="0 0 48 48">
      <Path fill="#f44336" d="M36 8.4l3.5 3.5L12 39.6 8.4 36 36 8.4z"></Path>
      <Path fill="#f44336" d="M39.6 36L36 39.6 8.4 12 12 8.4 39.6 36z"></Path>
    </Svg>
  );
}
