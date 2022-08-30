import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export default function CloudIcon() {
  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 24 24">
      {/** @ts-ignore */}
      <G clipPath="url(#a)">
        <Path
          d="M14.827 6.01A6.667 6.667 0 0 0 1.667 7.5c-.001 1.065.256 2.115.75 3.06a4.575 4.575 0 0 0 2.166 8.607h8.75A6.667 6.667 0 0 0 14.827 6.01ZM13.333 17.5h-8.75a2.91 2.91 0 0 1-.726-5.728.834.834 0 0 0 .461-1.304A4.947 4.947 0 0 1 3.333 7.5a5 5 0 0 1 9.95-.667.834.834 0 0 0 .715.717 5 5 0 0 1-.665 9.95Z"
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
