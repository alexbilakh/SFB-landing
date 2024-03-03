import React from "react";
import "./button.scss";

const Button = ({ title, link, style }) => {
  return (
    <div className="button-group w-full h-[26px] lg:w-[207px] lg:h-[50px]">
      <a className={`btn btn1 flex items-center justify-center ${style}`} href={link} target="_blank">
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Button;
