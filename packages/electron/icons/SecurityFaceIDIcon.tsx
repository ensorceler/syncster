import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export default function SecurityFaceIDIcon() {
  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 20 20">
      {/**@ts-ignore */}
      <G
        clipPath="url(#a)"
        stroke="#C1C1CD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15.093.833h2.037a2.037 2.037 0 0 1 2.037 2.037v2.037M4.907.833H2.87A2.037 2.037 0 0 0 .833 2.87v2.037M5.926 5.926v2.037M14.074 5.926v2.037M13.056 14.074S12.037 15.093 10 15.093s-3.056-1.019-3.056-1.019M10 5.926v5.092h1.018M15.093 19.167h2.037a2.037 2.037 0 0 0 2.037-2.037v-2.037M4.907 19.167H2.87A2.037 2.037 0 0 1 .833 17.13v-2.037" />
      </G>
      <Defs>
        {/**@ts-ignore */}
        <ClipPath id="a">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 20 0)"
            d="M0 0h20v20H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
