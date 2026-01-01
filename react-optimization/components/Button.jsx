import React from "react";

const Button = React.memo(({ name }) => {
  console.log("child rendered", name);
  return <div>haha</div>;
});

export default Button;
