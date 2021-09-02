import "./Header.css";
const Header=(props)=>{
    let style={
        color:" hsl(227, 35%, 25%)",
    }
    if(props.theme=="dark")
    {
        style.color="white";
    }
    return(
        <div className="header">
            <h4 style={style}>Simple,traffic-based pricing</h4>
            <p style={style}><span className="line_change">Sign-up to our 30-day trial. </span>No credit card required.</p>
        </div>
    );
}
export default Header;