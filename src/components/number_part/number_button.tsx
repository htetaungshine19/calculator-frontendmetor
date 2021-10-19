import React from "react";
import style from "./number_button.module.css";
interface Props {
  number: string;
  width?: string;
  height?: string;
  padding?: string;
  font_size?: string;
}
const NumberButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={style.number_button}
      style={{
        width: props.width ? props.width : "",
        height: props.height ? props.height : "",
        padding: props.padding ? props.padding : "",
        fontSize: props.font_size ? props.font_size : "",
      }}
    >
      {props.number}
    </button>
  );
};
export default NumberButton;
