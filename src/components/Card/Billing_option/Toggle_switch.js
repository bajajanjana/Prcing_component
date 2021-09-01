import React,{useState} from "react";
import "./Toggle_switch.css";
const ToggleSwitch = (props) => {
    const inputSwitchHandler=(event)=>{
        // console.log("in ToggleSwitch");
        // console.log(event.target.value);
        if(event.target.value==="on")
        {
            event.target.value="off";
            props.onNewInput(true);
        }
        else
        {
            event.target.value="on";
            props.onNewInput(false);
            //console.log(false);
        }
    }
  return (
      <label className="switch">
      <input type="checkbox"  onChange={inputSwitchHandler}/>
      <span className="slider round"></span>
      </label>
  );
};

export default ToggleSwitch;
