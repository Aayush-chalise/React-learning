import React from "react";
import { useCallback } from "react";
import Button from "../components/Button";

const App = () => {
  const [count, setCount] = React.useState(0);
  console.log("parent rendered");

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <Button handleBtnClick={handleClick} />
      <div>count is {count}</div>
    </div>
  );
};

export default App;
