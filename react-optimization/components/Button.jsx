import React from "react";

const Button = React.memo(() => {
  console.log("child rendered");
  return <div>haha</div>;
});

export default Button;
