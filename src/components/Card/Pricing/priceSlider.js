import React,{useState} from "react";
import CalculatePrice from "./calculatePrice";
import "./priceSlider.css";

const PriceSlider = (props) => {
  const inputHandler = (event) => {
    props.onChangeprice(event.target.value);
  };

  // console.log("in priceslider");
  // console.log(props.toggleSwitchInput);
  let rate="month";
  if(props.toggleSwitchInput==true)
  {
    rate="year";
  }
  return (
    <div>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        className="input_slider"
        onChange={inputHandler}
      />
      <div className="price_rate_withslider">
        <CalculatePrice
          input_pageview={props.input}
          switchState={props.toggleSwitchInput}
        />
        <p style={{ color: props.theme === "dark" ? "white" : "" }}> /{rate}</p>
      </div>
    </div>
  );
};

export default PriceSlider;
