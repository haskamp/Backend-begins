import React from "react";
const text = (children, ...rest) => {
  return <div {...rest}>{children}</div>;
};
export default text;
