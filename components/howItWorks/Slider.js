import React from "react";
import classNames from "classnames";
import Image from "next/image";
import "./slider.scss";

const Slider = ({ sliderItems, style, delay }) => {
  return (
    <div
      className={`slider ${style}`}
    >
      <div className={`slide-track ${delay}`}>
        {sliderItems.map((item, index) => {
          return (
              
              <Image 
                src={item.url} 
                alt="slider" 
                height="0" 
                width="250" 
                className={item.size}  
                key={index}
              />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
