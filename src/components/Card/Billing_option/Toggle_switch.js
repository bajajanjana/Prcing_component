import "./Toggle_switch.css";
const ToggleSwitch = (props) => {
    const inputSwitchHandler=(event)=>{
        // console.log("in ToggleSwitch");
        // console.log(event.target.value);
        if(event.target.value==="on")
        {
            // event.target.value="true";
            props.onNewInput(true);
        }
        else
        {
            // event.target.value="false";
            props.onNewInput(false);
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
