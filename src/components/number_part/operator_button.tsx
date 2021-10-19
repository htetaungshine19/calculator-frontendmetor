import React from "react";
import style from "./operator_button.module.css";
interface Props {
  sign: string;
  width?: string;
  height?: string;
  padding?: string;
  font_size?: string;
  gridColumnEnd?: string;
}
const OperatorButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={style.number_button}
      style={{
        width: props.width ? props.width : "",
        height: props.height ? props.height : "",
        padding: props.padding ? props.padding : "",
        fontSize: props.font_size ? props.font_size : "",
        gridColumnEnd: props.gridColumnEnd ? props.gridColumnEnd : "",
      }}
    >
      {props.sign}
    </button>
  );
};
export default OperatorButton;
