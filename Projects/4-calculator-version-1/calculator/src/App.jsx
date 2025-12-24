import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {
  const [calcVal, setCalcVal] = useState("");
  const handleBtnClick = (btnName, event) => {
    console.log(btnName);
    if (btnName === "C") {
      setCalcVal("");
    } else if (btnName === "=") {
      setCalcVal(eval(calcVal));
    } else {
      const newDisplayVal = calcVal + btnName;
      setCalcVal(newDisplayVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display value={calcVal}></Display>
      <ButtonContainer onBtnClicked={handleBtnClick}></ButtonContainer>
    </div>
  );
}
export default App;
