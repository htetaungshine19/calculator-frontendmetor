import React from "react";

import HeaderComponent from "./components/header/header";
import NumberPart from "./components/number_part/number_part";
import NumberShow from "./components/number_show/number_show";

import style from "./container.module.css";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <HeaderComponent />
      <NumberShow />
      <NumberPart />
    </div>
  );
};

export default App;
