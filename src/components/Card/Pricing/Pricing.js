import CalculatePrice from "./calculatePrice";
import "./Pricing.css"
const Pricing=(props)=>{
    
    return(
        <div className="pricing">
            <p>{props.val}K PAGEVIEWS</p>
            <div className="price_rate">
            <CalculatePrice input_pageview={props.val}/>
            <p> /month</p>
            </div>
        </div>
    );
}
export default Pricing;