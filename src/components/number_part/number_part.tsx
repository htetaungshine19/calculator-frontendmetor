import Button3 from "./button3";
import NumberButton from "./number_button";
import style from "./number_part.module.css";
import OperatorButton from "./operator_button";

const NumberPart = () => {
  return (
    <div className={style.number_part}>
      <NumberButton number={"1"} />
      <NumberButton number={"2"} />
      <NumberButton number={"3"} />
      <OperatorButton sign={"DEL"} />

      <NumberButton number={"4"} />
      <NumberButton number={"5"} />
      <NumberButton number={"6"} />
      <NumberButton number={"+"} />

      <NumberButton number={"7"} />
      <NumberButton number={"8"} />
      <NumberButton number={"9"} />
      <NumberButton number={"-"} />

      <NumberButton number={"."} />
      <NumberButton number={"0"} />
      <NumberButton number={"/"} />
      <NumberButton number={"x"} />

      <OperatorButton sign={"RESET"} gridColumnEnd="span 2" />
      <Button3 sign={"="} gridColumnEnd="span 2" />
    </div>
  );
};

export default NumberPart;
