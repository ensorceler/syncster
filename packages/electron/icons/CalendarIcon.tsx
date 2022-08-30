import Svg, { ClipPath, G, Path, Defs } from "react-native-svg";

interface Prop {
  focused: boolean;
  color: string;
  size: number;
}
function CalendarIcon(props: Prop) {
  return (
    <Svg width={props.size} height={props.size} fill={props.color}>
      {/*
           //@ts-ignore*/}
      <G clipPath="url(#a)" fill={props.color}>
        <Path d="M14.25 1.5h-.75V.75a.75.75 0 1 0-1.5 0v.75H6V.75a.75.75 0 0 0-1.5 0v.75h-.75A3.755 3.755 0 0 0 0 5.25v9A3.754 3.754 0 0 0 3.75 18h10.5A3.754 3.754 0 0 0 18 14.25v-9a3.755 3.755 0 0 0-3.75-3.75ZM1.5 5.25A2.25 2.25 0 0 1 3.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25V6h-15v-.75ZM14.25 16.5H3.75a2.25 2.25 0 0 1-2.25-2.25V7.5h15v6.75a2.25 2.25 0 0 1-2.25 2.25Z" />
        <Path d="M9 12.375a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM5.25 12.375a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM12.75 12.375a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
      </G>
      <Defs>
        {/*
           //@ts-ignore*/}
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h18v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default CalendarIcon;
