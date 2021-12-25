import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className={`button  ${props.selected}`}>
      {props.btnName}
    </button>
  );
};

export default Button;
