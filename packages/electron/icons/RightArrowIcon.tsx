import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

interface stylePropsType {
  color?: string;
}
export default function RightArrowIcon({ color }: stylePropsType) {
  return (
    <Svg width={12} height={12} fill="none" viewBox="0 0 12 12">
      {/** @ts-ignore */}
      <G clipPath="url(#a)">
        <Path
          d="M3.415 0a.5.5 0 0 1 .355.145L7.855 4.23a2.5 2.5 0 0 1 0 3.54L3.77 11.855a.502.502 0 0 1-.71-.71L7.145 7.06a1.5 1.5 0 0 0 0-2.12L3.06.855A.5.5 0 0 1 3.415 0Z"
          fill={color !== undefined ? color : "#fff"}
        />
      </G>
      <Defs>
        {/** @ts-ignore */}
        <ClipPath id="a">
          <Path fill="#fff" transform="rotate(-180 6 6)" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
