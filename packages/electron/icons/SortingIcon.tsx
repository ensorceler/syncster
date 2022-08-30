import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function SortingIcon() {
  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      {/** @ts-ignore */}
      <G clipPath="url(#a)" fill="#C1C1CD">
        <Path d="M0 2.5v6.667h9.167V0H2.5A2.5 2.5 0 0 0 0 2.5Zm7.5 5H1.667v-5a.833.833 0 0 1 .833-.833h5V7.5ZM0 17.5A2.5 2.5 0 0 0 2.5 20h6.667v-9.167H0V17.5Zm1.667-5H7.5v5.833h-5a.833.833 0 0 1-.833-.833v-5ZM16.667 17.848V2.155l2.153 2.15L20 3.125 17.6.73a2.5 2.5 0 0 0-3.532 0l-2.396 2.392L12.85 4.3 15 2.15v15.696l-2.154-2.152-1.178 1.18 2.4 2.395a2.5 2.5 0 0 0 3.532 0l2.4-2.392-1.178-1.179-2.155 2.149Z" />
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
