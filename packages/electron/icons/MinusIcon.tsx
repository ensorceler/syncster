import Svg, { Path } from "react-native-svg";

interface PropType {
  color?: string;
  size?: number;
}

const MinusIcon = ({ color }: PropType) => {
  return (
    <Svg width="24" height="4" fill="none">
      <Path
        d="M22 -0.000488281H2C0.89543 -0.000488281 0 0.894947 0 1.99952C0 3.1041 0.89543 3.99953 2 3.99953H22C23.1046 3.99953 24 3.1041 24 1.99952C24 0.894947 23.1046 -0.000488281 22 -0.000488281Z"
        fill={color === undefined ? "white" : color}
      />
    </Svg>
  );
};

export default MinusIcon;
