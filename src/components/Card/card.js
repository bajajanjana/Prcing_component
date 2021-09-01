import React,{useState} from "react";
import "./card.css";
import Perks_nd_trial from "./Perks_nd_trial/perks_nd_trial";
import PriceSlider from "./Pricing/priceSlider";
import Pricing from "./Pricing/Pricing";
// const initial_price=[
//     {
//         pageviews:200,
//         price:16,
//     },
// ];
const initial_pageviews=10;
const Card=()=>{
    const [pageviews,setPrice]=useState(initial_pageviews);
    
    const priceHnadler=(newPageviews)=>{
    //    setPrice((prevPrices)=>{
    //        return [newPrice,...prevPrices];
    //    });
    setPrice(newPageviews);
    }
    return(
        <div className="card">
            <div className="container">
            <Pricing val={pageviews}/>
            <PriceSlider onChangeprice={priceHnadler} input={pageviews}/>
            <Perks_nd_trial/>
            </div>
        </div>
    );
}
export default Card;