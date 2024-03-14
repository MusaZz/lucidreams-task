import React from "react";

const Button = ({click}) => {
  return (
    <button
      onClick={click}
      className=" text-[#A0A6B3] hover:text-[#1d1d1d] duration-150"
    >
      [x]
    </button>
  );
};

export default Button;
