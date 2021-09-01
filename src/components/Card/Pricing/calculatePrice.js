import "./calculatePrice.css";
const CalculatePrice=(props)=>{

    let price=8;
    if(props.input_pageview >=0 && props.input_pageview<=10)
    price=8;
    else if(props.input_pageview >10 && props.input_pageview<=50)
    price=12;
    else if(props.input_pageview >50 && props.input_pageview<=100)
    price=16;
    else if(props.input_pageview >16 && props.input_pageview<=500)
    price=24;
    else
    price=36;

    // console.log(price);
    // console.log("in calculateprice hello");
    // console.log(props.switchState);
    if(props.switchState===true)
    {
        price=price*12;
        const discount=(price*25)/100;
        price=price-discount;
        console.log(price);
    }
    return(
        <p className="price"><strong >$ {price}.00 </strong></p>
    );
}
export default CalculatePrice;