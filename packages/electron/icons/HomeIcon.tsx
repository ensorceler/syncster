import React from "react";
import Svg, { Path } from "react-native-svg";
interface Prop {
  color: string;
  size: number;
}
const HomeIcon = (props: Prop) => {
  return (
    <Svg height={props.size} width={props.size} fill="none">
      <Path
        d="M17.3408 6.80159L11.652 1.11209C10.9479 0.410081 9.99426 0.0158691 9.00001 0.0158691C8.00576 0.0158691 7.05208 0.410081 6.34801 1.11209L0.659259 6.80159C0.449578 7.00993 0.283336 7.25781 0.170171 7.53088C0.0570054 7.80394 -0.0008328 8.09675 9.05961e-06 8.39234V15.7551C9.05961e-06 16.3518 0.237062 16.9241 0.659019 17.3461C1.08098 17.768 1.65327 18.0051 2.25001 18.0051H15.75C16.3467 18.0051 16.919 17.768 17.341 17.3461C17.763 16.9241 18 16.3518 18 15.7551V8.39234C18.0009 8.09675 17.943 7.80394 17.8298 7.53088C17.7167 7.25781 17.5504 7.00993 17.3408 6.80159V6.80159ZM11.25 16.5051H6.75001V13.5546C6.75001 12.9579 6.98706 12.3856 7.40902 11.9636C7.83098 11.5416 8.40327 11.3046 9.00001 11.3046C9.59675 11.3046 10.169 11.5416 10.591 11.9636C11.013 12.3856 11.25 12.9579 11.25 13.5546V16.5051ZM16.5 15.7551C16.5 15.954 16.421 16.1448 16.2803 16.2854C16.1397 16.4261 15.9489 16.5051 15.75 16.5051H12.75V13.5546C12.75 12.56 12.3549 11.6062 11.6517 10.9029C10.9484 10.1997 9.99457 9.80459 9.00001 9.80459C8.00545 9.80459 7.05162 10.1997 6.34836 10.9029C5.6451 11.6062 5.25001 12.56 5.25001 13.5546V16.5051H2.25001C2.0511 16.5051 1.86033 16.4261 1.71968 16.2854C1.57903 16.1448 1.50001 15.954 1.50001 15.7551V8.39234C1.5007 8.19357 1.57965 8.00308 1.71976 7.86209L7.40851 2.17484C7.83129 1.75404 8.40351 1.5178 9.00001 1.5178C9.59651 1.5178 10.1687 1.75404 10.5915 2.17484L16.2803 7.86434C16.4198 8.00477 16.4987 8.19435 16.5 8.39234V15.7551Z"
        fill={props.color}
      />
    </Svg>
  );
};
export default HomeIcon;