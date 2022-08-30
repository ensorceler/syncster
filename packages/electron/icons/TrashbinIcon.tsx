import React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
export default function TrashbinIcon() {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      {/** @ts-ignore */}
      <G clipPath="url(#a)" fill="#A2A2B5">
        <Path d="M21 4h-3.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2ZM11 2h2a3.006 3.006 0 0 1 2.829 2H8.17A3.006 3.006 0 0 1 11 2Zm7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12v13Z" />
        <Path d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM14 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
      </G>
      <Defs>
        {/** @ts-ignore */}
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
