import Svg, { ClipPath, G, Path, Defs } from "react-native-svg";

interface Prop {
  focused: boolean;
  color: string;
  size: number;
}
function CreditCardIcon(props: Prop) {
  return (
    <Svg width={props.size} height={props.size} fill={props.color}>
      <Path
        d="M4.125 10.95a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
        fill={props.color}
      />
      <Path
        d="M14.25.45H3.75A3.755 3.755 0 0 0 0 4.2v6a3.755 3.755 0 0 0 3.75 3.75h10.5A3.754 3.754 0 0 0 18 10.2v-6A3.755 3.755 0 0 0 14.25.45Zm-10.5 1.5h10.5A2.25 2.25 0 0 1 16.5 4.2h-15a2.25 2.25 0 0 1 2.25-2.25Zm10.5 10.5H3.75A2.25 2.25 0 0 1 1.5 10.2V5.7h15v4.5a2.25 2.25 0 0 1-2.25 2.25Z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m18 14.25-1.5.6c0 .597-.237.569-.659.991a2.25 2.25 0 0 1-1.591.659H3.75a2.25 2.25 0 0 1-1.591-.659c-.422-.422-.659-.394-.659-.991l-1.5-.6A3.754 3.754 0 0 0 3.75 18h10.5A3.754 3.754 0 0 0 18 14.25Z"
        fill={props.color}
      />
    </Svg>
  );
}
export default CreditCardIcon;
