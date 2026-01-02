import React from "react";

// component memoization : memoization means saving(caching) the result of a function so that if the function gets the same input again it doesnot have to reacalculate the result again . "Dont Recalculate What You Already Know".
const Button = React.memo(({ handleBtnClick }) => {
  console.log("child rendered");
  // console.log(handleBtnClick)
  return <button onClick={handleBtnClick}>Child Button</button>;
});

export default Button;
