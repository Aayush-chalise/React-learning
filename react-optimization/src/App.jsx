import React from "react";

import Button from "../components/Button";

const App = () => {
  const [count, setCount] = React.useState(0);
  console.log("parent rendered");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Button name="aayush" />
      <div>count is {count}</div>
    </div>
  );
};

export default App;
