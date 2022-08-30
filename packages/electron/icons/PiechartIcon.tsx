import { View } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function PiechartIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      {/** @ts-ignore */}
      <G clipPath="url(#a)">
        <Path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm7.977 7.6-7.423 1.443a4.11 4.11 0 0 1-.306-.566L7.464 2.061A8.323 8.323 0 0 1 17.978 7.6ZM10 18.333A8.329 8.329 0 0 1 5.937 2.732L8.718 9.14a5.842 5.842 0 0 0 1.806 2.31l5.544 4.243A8.306 8.306 0 0 1 10 18.334Zm7.083-3.962-5.104-3.907 6.318-1.227c.022.25.038.505.038.763a8.27 8.27 0 0 1-1.252 4.37Z"
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
