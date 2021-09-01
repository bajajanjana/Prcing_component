import React,{useState} from "react";
import Billing_option from "./Billing_option/Billing_option";
import "./card.css";
import Perks_Nd_Trial from "./Perks_nd_trial/perks_nd_trial";
import PriceSlider from "./Pricing/priceSlider";
import Pricing from "./Pricing/Pricing";
// const initial_price=[
//     {
//         pageviews:200,
//         price:16,
//     },
// ];
const initial_pageviews=10;
const  initial_toggle=false;
const Card=(props)=>{
    const [pageviews,setPrice]=useState(initial_pageviews);
    const [toggleSwitch,setSwitch]=useState(initial_toggle);
    
    const priceHnadler=(newPageviews)=>{
    //    setPrice((prevPrices)=>{
    //        return [newPrice,...prevPrices];
    //    });
    setPrice(newPageviews);
    }

    const toggleHandler=(inputSwitch)=>{
        // console.log("in card");
        // console.log(inputSwitch);
        setSwitch(inputSwitch);
    }
    const style={
        color:"hsl(225, 20%, 60%)",
    }
    if(props.theme==="dark")
    {
        style.color="hsl(227, 35%, 25%)";
    }
    return(
        <div className="card">
            <div className="container">
            <Pricing val={pageviews} toggleSwitchInput={toggleSwitch} theme={props.theme}/>
            <PriceSlider onChangeprice={priceHnadler} input={pageviews} toggleSwitchInput={toggleSwitch} theme={props.theme}/>
            <Billing_option onToggle={toggleHandler} theme={props.theme}/>
            <hr style={style}/>
            <Perks_Nd_Trial theme={props.theme}/>
            </div>
        </div>
    );
}
export default Card;