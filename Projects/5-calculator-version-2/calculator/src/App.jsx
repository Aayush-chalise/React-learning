import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calcVal, setCalcVal] = useState([""]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalcVal("");
    } else if (buttonText === "=") {
      const result = eval(calcVal);
      setCalcVal(result);
    } else {
      const newDisplayValue = calcVal + buttonText;
      setCalcVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calcVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
