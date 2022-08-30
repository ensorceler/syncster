import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
interface stylePropsType {
  color?: string;
}
export default function DownArrowIcon({ color }: stylePropsType) {
  return (
    <Svg width={25} height={25} fill="none" viewBox="0 0 24 24">
      {/** @ts-ignore */}
      <G clipPath="url(#a)">
        <Path
          d="M24 6.83a1 1 0 0 1-.29.71l-8.17 8.17a5 5 0 0 1-7.08 0L.29 7.54a1.004 1.004 0 0 1 1.42-1.42l8.17 8.17a3 3 0 0 0 4.24 0l8.17-8.17a1 1 0 0 1 1.71.71Z"
          fill={color !== undefined ? color : "#fff"}
        />
      </G>
      <Defs>
        {/** @ts-ignore */}
        <ClipPath id="a">
          <Path fill="#fff" transform="rotate(-90 12 12)" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
