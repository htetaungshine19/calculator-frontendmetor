import style from "./header.module.css";
import React from "react";
import { aC, theme_types } from "../theme/theme";

const HeaderComponent = () => {
  const aCC = React.useContext(aC);

  return (
    <div className={style.header}>
      <h2>Calc</h2>
      <div className={style.theme_choice_sec}>
        <p className={style.theme_p}>theme</p>
        <div className={style.toggle_button}>
          <input type="radio" name="toggle" id={"1"} />
          <label
            onClick={(e) => {
              aCC.f(theme_types.theme_1);
            }}
            className={style.toggle}
            htmlFor={"1"}
          />
          <input type="radio" name="toggle" id={"2"} />
          <label
            className={style.toggle}
            htmlFor={"2"}
            onClick={(e) => {
              aCC.f(theme_types.theme_2);
            }}
          />
          <input type="radio" name="toggle" id={"3"} />
          <label
            className={style.toggle}
            htmlFor={"3"}
            onClick={(e) => {
              aCC.f(theme_types.theme_3);
            }}
          />
          <span className={style.b_t}></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
