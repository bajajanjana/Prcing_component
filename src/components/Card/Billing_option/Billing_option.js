import "./Billing_option.css";
import ToggleSwitch from "./Toggle_switch";
const Billing_option = (props) => {
    const newInputHandler=(inputVal)=>{
        // console.log("in Billing_option");
        // console.log(inputVal);
        props.onToggle(inputVal);
    }
  return (
    <div className="content">
      <div>
        <p>Monthly Billing</p>
      </div>
      <div>
        {/* <p>Toggle Switch</p> */}
        <ToggleSwitch  onNewInput={newInputHandler}/>
      </div>
      <div className="yearly_discount">
        <p>Yearly Billing</p>
        <button className="discount">25% discount</button>
      </div>
    </div>
  );
};

export default Billing_option;
