import CalculatePrice from "./calculatePrice";
import "./Pricing.css"
const Pricing=(props)=>{
    // console.log(props.val);
    // console.log("in pricing");
    // console.log(props.toggleSwitchInput);
    let rate="month";
    if(props.toggleSwitchInput===true)
    {
        rate="year";
    }
    return(
        <div className="pricing">
            <p style={{color:(props.theme==="dark") ? "white":""}}>{props.val}K PAGEVIEWS</p>
            <div className="price_rate">
            <CalculatePrice input_pageview={props.val} switchState={props.toggleSwitchInput}/>
            <p style={{color:(props.theme==="dark") ? "white":""}}> /{rate}</p>
            </div>
        </div>
    );
}
export default Pricing;