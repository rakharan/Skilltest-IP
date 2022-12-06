import React from "react";

const Button = (props) => {
  return (
    <button
      className={`rounded min-w-[120px] px-4 py-2 transition-all duration-300 h-10 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
